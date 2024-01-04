import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Sidebar",
  tags: ['autodocs'],

  args: {
    icon: true,
    applicationName: 'Application Name'
  },

  argTypes: {
    ifxSidebarNavigationItem: {
      action: 'ifxSidebarNavigationItem',
      description: 'Custom event emitted when a navigation item becomes active after clicking on it',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxSidebarNavigationItem={handleActiveItemChange}\nVue:@ifxSidebarNavigationItem="handleActiveItemChange"\nAngular:(ifxSidebarNavigationItem)="handleActiveItemChange()"\nVanillaJs:.addEventListener("ifxSidebarNavigationItem", (event) => {//handle change});',
        },
      },
    },
    ifxSidebarActionItem: {
      action: 'ifxSidebarActionItem',
      description: 'Custom event emitted when an action item is clicked',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxSidebarActionItem={handleActionItemChange}\nVue:@ifxSidebarActionItem="handleActionItemChange"\nAngular:(ifxSidebarActionItem)="handleActionItemChange()"\nVanillaJs:.addEventListener("ifxSidebarActionItem", (event) => {//handle change});',
        },
      },
    },
  },
};


const DefaultTemplate = (args) => {
  // Create the sidebar element and attach event listener
  const sidebarElement = document.createElement('ifx-sidebar') as HTMLIfxSidebarElement;
  sidebarElement.setAttribute('application-name', args.applicationName);
  sidebarElement.addEventListener('ifxSidebarNavigationItem', action(`ifxSidebarNavigationItem`));
  sidebarElement.addEventListener('ifxSidebarActionItem', action(`ifxSidebarActionItem`));

  const items = ["Item One", "Item Two", "Item Three", "Item Four"];

  items.forEach(itemTitle => {
    const itemElement = document.createElement('ifx-sidebar-item') as HTMLIfxSidebarItemElement;
    itemElement.setAttribute('href', "http://google.com");
    itemElement.setAttribute('target', "_blank");
    if (args.icon) {
      itemElement.setAttribute('icon', 'image-16');
    }
    itemElement.textContent = itemTitle;

    // Append the item to the sidebar
    sidebarElement.appendChild(itemElement);
  });

  return sidebarElement;
};


export const Default = DefaultTemplate.bind({});



const SubmenuTemplate = (args) => {
  // Create the sidebar element and attach event listener
  const sidebarElement = document.createElement('ifx-sidebar') as HTMLIfxSidebarElement;
  sidebarElement.setAttribute('application-name', args.applicationName);
  sidebarElement.addEventListener('ifxSidebarNavigationItem', action('ifxSidebarNavigationItem'));
  sidebarElement.addEventListener('ifxSidebarActionItem', action('ifxSidebarActionItem'));

  // Create 3 sections
  for (let i = 0; i < 3; i++) {
    const sectionElement = document.createElement('ifx-sidebar-item');
    sectionElement.textContent = `Header Section ${i + 1}`;

    // In each section, create 3 menu items
    for (let j = 0; j < 3; j++) {
      const menuItemElement = document.createElement('ifx-sidebar-item');
      menuItemElement.setAttribute('icon', args.icon ? 'image-16' : '');
      menuItemElement.textContent = `Menu Item ${j + 1}`;

      // In the first menu item of each section, create 3 submenu items
      if (j === 0) {
        for (let k = 0; k < 3; k++) {
          const subMenuItemElement = document.createElement('ifx-sidebar-item');
          subMenuItemElement.textContent = `Sub Menu Item ${k + 1}`;
          menuItemElement.appendChild(subMenuItemElement);
        }
      }

      sectionElement.appendChild(menuItemElement);
    }
    sidebarElement.appendChild(sectionElement);
  }
  const firstSection = sidebarElement.querySelectorAll('ifx-sidebar-item')[0];
  const firstMenuItem = firstSection.querySelectorAll('ifx-sidebar-item')[0];

  firstMenuItem.querySelectorAll('ifx-sidebar-item')[0].setAttribute('active', 'true') //first submenu item
  firstMenuItem.querySelectorAll('ifx-sidebar-item')[0].setAttribute('is-action-item', 'false')

  firstMenuItem.querySelectorAll('ifx-sidebar-item')[1].setAttribute('is-action-item', 'true') //2nd submenu item
  firstMenuItem.querySelectorAll('ifx-sidebar-item')[2].setAttribute('is-action-item', 'true') //3rd sub menu item


  return sidebarElement;
};

export const WithSubmenu = SubmenuTemplate.bind({});


const NumberIndicatorTemplate = () =>
  `<ifx-sidebar application-name="Application name">
  <ifx-sidebar-item icon="image-16" number-indicator="5">Menu Item</ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16" number-indicator="1">Menu Item</ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16" number-indicator="23">Menu Item</ifx-sidebar-item>
  <ifx-sidebar-item active="false">
    Header Section
    <ifx-sidebar-item icon="image-16" active="false" >
      Second layer
      <ifx-sidebar-item target="_blank" active="false" icon="image-16">
      3rd layer Menu Item
      </ifx-sidebar-item>

      <ifx-sidebar-item target="_blank" active="false" icon="image-16" value="thisPage">
      This Page
      </ifx-sidebar-item>

      <ifx-sidebar-item target="_blank" active="false" icon="image-16">
      3rd layer Menu Item
      </ifx-sidebar-item>
    </ifx-sidebar-item>

    <ifx-sidebar-item icon="image-16" active="false">
      Second layer
      <ifx-sidebar-item target="_blank" icon="image-16" active="false">
      Menu Item
      </ifx-sidebar-item>
    </ifx-sidebar-item>

    <ifx-sidebar-item icon="image-16" active="false">
      Second layer
      <ifx-sidebar-item target="_blank" icon="image-16" active="false">
      Menu Item
      </ifx-sidebar-item>
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  

  <ifx-sidebar-item active="false" active="false">
  Header Section
  <ifx-sidebar-item icon="image-16" active="false">
    Menu Item
    <ifx-sidebar-item active="false" target="_blank" icon="image-16">
    Sub Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item target="_blank" icon="image-16" value="thisPage">
    This one too
    </ifx-sidebar-item>
    <ifx-sidebar-item target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  </ifx-sidebar-item>


  <ifx-sidebar-item>
  Header Section
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  </ifx-sidebar-item>
</ifx-sidebar>`;


export const WithNumberIndicator = NumberIndicatorTemplate.bind({});


