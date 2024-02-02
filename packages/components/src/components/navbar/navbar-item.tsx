import { Component, h, Element, Prop, State, Listen } from "@stencil/core";

@Component({
  tag: 'ifx-navbar-item',
  styleUrl: 'navbar-item.scss',
  shadow: true
})

export class NavbarItem {

  @Element() el;
  @Prop() hideLabel: boolean = false;
  @Prop() icon: string = ""
  @Prop() href: string = ""
  @State() internalHref: string = ""
  @Prop() target: string = "_self";
  @Prop() hideComponent: boolean = false;
  @State() isMenuItem: boolean = false;
  @State() hasChildNavItems: boolean = false;

  @Listen('mousedown', { target: 'document' })
  handleOutsideClick(event: MouseEvent) {
    const path = event.composedPath();
    const itemMenu = this.getItemMenu()
    if(itemMenu) { 
      if(itemMenu.classList.contains('open')) { 
        if (!path.includes(this.el)) {
          this.closeItemMenu();
        }
      }
    }
  }

  componentWillLoad() {
    this.setHref()
    this.checkIfItemIsNested()
    const sidebarItems = this.getNavbarItems();
    if (sidebarItems.length !== 0) {
      this.hasChildNavItems = true;
    } else {
      this.hasChildNavItems = false;
    }
  }

  componentDidLoad() { 
    if(this.hasChildNavItems) { 
      const navItems = this.getNavbarItems();
      this.appendNavItemToMenu(navItems)
    }
  }


  handleClassList(el, type, className) {
    el.classList[type](className)
    if (type === 'contains') {
      return el.classList.contains(className)
    }
  }

 
  getNavbarItems() {
    const navItems = this.el.querySelectorAll('ifx-navbar-item')
    return navItems;
  }
  
  getNavBarItem() { 
    const navItem = this.el.shadowRoot.querySelector('.navbar__container-left-content-navigation-item')
    return navItem;
  }


  appendNavItemToMenu(navItems) { 
    const menu = this.getItemMenu()
    navItems.forEach((el: HTMLElement) => {
      const li = document.createElement('li')
      li.appendChild(el)
      menu.appendChild(li)
    })
  }

  setHref() {
    if (this.href.toLowerCase().trim() === "") {
      this.internalHref = undefined;
    } else this.internalHref = this.href;
  }

  checkIfItemIsNested() {
    const parentElement = this.el.parentElement;
    if (parentElement.tagName.toUpperCase() === 'IFX-NAVBAR-ITEM') {
      this.isMenuItem = true;
      return;
    } else {
      this.isMenuItem = false;
      this.setItemSideSpecifications()
    }
  }

  setItemSideSpecifications() { 
    const menuItem = this.el;
    const slotValue = menuItem.getAttribute('slot')
    if(slotValue.toLowerCase().trim() === "right-item") { 
      //add hideable
      //add class for correct mobile menu location
    } else { 
      //remove hideable option
      //add class for correct mobile menu location
    }
  }

  setInternalContent() {
    const slot = this.el.shadowRoot.querySelector('slot');
    let nodes = slot.assignedNodes();

    nodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        //console.log('Slotted content is text:', node.textContent);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const elementNode = node as Element;
        if (elementNode.tagName === 'IFX-NAVBAR-ITEM') {
          //console.log('Slotted content is an IFX-NAVBAR-ITEM component', elementNode);
        } else {
          //console.log('Slotted content is an unknown component:', elementNode.tagName);
        }
      }
    });
    
  }


  handleSlotChange(event) { 
    
  }

  getItemMenu() { 
    const menu = this.el.shadowRoot.querySelector('.navbar-menu');
    return menu;
  }

  closeItemMenu() { 
    const itemMenu = this.getItemMenu()
    if(itemMenu) { 
      this.handleClassList(itemMenu, 'remove', 'open')
    }
  }

  toggleItemMenu() {
    if(this.isMenuItem && this.hasChildNavItems) { 
      const itemMenu = this.getItemMenu()
      this.handleClassList(itemMenu, 'add', 'right')
    }
 
    if(this.hasChildNavItems) { 
      const itemMenu = this.getItemMenu();
      const menuItem = this.getNavBarItem()

      this.handleClassList(itemMenu, 'toggle', 'open');
      this.handleClassList(menuItem, 'toggle', 'open');
    } 
  }

  
  itemHasNestedItems() { 
    const childNavItem = this.el.shadowRoot.querySelector('ifx-navbar-item')
    if(childNavItem) { 
      return true;
    } else {
      return false;
    }
  }
  
  handleNestedLayerMenu(e) { 
    if(this.isMenuItem && this.hasChildNavItems) { 
      if(e.type.toUpperCase() === 'MOUSEENTER') { 
        const itemMenu = this.getItemMenu()
        this.handleClassList(itemMenu, 'add', 'open')
        this.handleClassList(itemMenu, 'add', 'right')
      }

      if(e.type.toUpperCase() === 'MOUSELEAVE') { 
        const itemMenu = this.getItemMenu()
        this.handleClassList(itemMenu, 'remove', 'open')
        this.handleClassList(itemMenu, 'remove', 'right')
      }
    }
  }

  
  
  render() {
    return (
      <div class="container" onMouseLeave={e => this.handleNestedLayerMenu(e)}  onMouseEnter={e => this.handleNestedLayerMenu(e)}>
        <a href={this.internalHref} target={this.target} onClick={() => this.toggleItemMenu()} class=   {`navbar__container-left-content-navigation-item ${this.hideLabel ? 'removeLabel' : ""} ${this. hideComponent ? 'hideElement' : ""} ${this.isMenuItem ? 'menuItem' : ""}`}>
          <div class={`navbar__container-right-content-navigation-item-icon-wrapper ${!this.icon ? "removeWrapper" : ""}`}>
            {this.icon && <ifx-icon icon={this.icon}></ifx-icon>}
          </div>
          <span>
            <slot onSlotchange={(e) => this.handleSlotChange(e)} />
          </span>
          {this.hasChildNavItems && !this.isMenuItem && <ifx-icon icon="chevron-up-12" />}
          {this.hasChildNavItems && this.isMenuItem && <ifx-icon icon="chevron-right-12" />}
        </a>
        {this.hasChildNavItems && <ul class='navbar-menu'></ul>}
      </div>
    )
  }
}