import { Component, h, Element, Event, EventEmitter, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'ifx-pagination',
  styleUrl: 'pagination.scss',
  shadow: true
})
export class Pagination {
  @Element() el;
  @Event() ifxPageChange: EventEmitter;
  @Event() ifxNextPage: EventEmitter;
  @Event() ifxPrevPage: EventEmitter;
  @Prop() currentPage: number = 0;
  @State() internalPage: number = 1;
  @State() itemsPerPage: number = 10;
  @State() numberOfPages: number[] = [];
  @Prop() total: number = 1;
  @Prop() surroundingPageCount: number = 1;
  @State() visiblePageIndices: Array<number | string> = [];
  @State() isLeftBtnDisabled: boolean = false;
  @State() isRightBtnDisabled: boolean = false;
  @State() currItem: number = 1;;
  
  private CLASS_DISABLED = "disabled"
  private CLASS_ACTIVE = "active"
  private CLASS_SIBLING_ACTIVE = "active-sibling"
  private DATA_KEY = "pagination";

  @Listen('ifxSelect')
  setItemsPerPage(e) { 
    this.itemsPerPage = parseInt(e.detail.label)
  }

  componentDidLoad() { 
   this.calculateVisiblePageIndices()

   var paginationElement = this.el.shadowRoot.querySelector(".pagination");
   let leftArrow = paginationElement.querySelector('.prev')
   this.navigateSinglePage(leftArrow, true) 
  }

  calculateNumberOfPages() { 
    const total = this.total <= this.itemsPerPage ? this.itemsPerPage : this.total;
    const itemsPerPage = this.itemsPerPage;
    const totalPageNumber = total / itemsPerPage;

    if(this.currentPage <= 0) { 
      this.internalPage = 1;
    } else if(this.currentPage > totalPageNumber) {
      this.internalPage = totalPageNumber;
      this.currItem = this.internalPage;
    } else this.internalPage = this.currentPage;

    this.numberOfPages = Array.from({ length: totalPageNumber }, (_, index) => index + 1);
  }

  componentWillLoad() { 
   this.calculateNumberOfPages()
  }

  componentWillUpdate() { 
    this.calculateNumberOfPages()
  }

  handleEventEmission(currActive) { 
    let currentPage = currActive+1;
    let totalPages = this.numberOfPages.length;
    let prevPage = currActive;
    let nextPage = currActive+2;

    this.ifxPageChange.emit({currentPage, totalPages, prevPage, nextPage})
  }

  initPagination(paginationContainer) {
    var listItems = paginationContainer.querySelectorAll("li");
   
    paginationContainer.dataset[this.DATA_KEY] = Array.from(listItems).indexOf(paginationContainer.querySelector(".active")); 
    
    paginationContainer.querySelector(".prev").addEventListener("click", (e) => this.navigateSinglePage(e, false));
    paginationContainer.querySelector(".next").addEventListener("click", (e) => this.navigateSinglePage(e, false));

    
    listItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        var parent = paginationContainer;
        let listItems = parent.querySelectorAll("li");

        parent.dataset[this.DATA_KEY] = Array.from(listItems).indexOf(e.currentTarget) 
        this.changePage(parent, false)
      });
    });
  }

  navigateSinglePage(e, initialValue) {
    let el = e;
    if(typeof e.target === 'object') { 
      el = e.target
    } 
  
    if (!el.classList.contains(this.CLASS_DISABLED)) {
      var parent = el.closest(".pagination");
      var currActive = parseInt(parent.dataset[this.DATA_KEY], 10);
      currActive += 1 * (el.classList.contains("prev") ? -1 : 1);

      if(currActive === -1) { 
        currActive = 0;
      }

      parent.dataset[this.DATA_KEY] = currActive;
      this.changePage(parent, initialValue)
    }
  }

  changePage(pagination, initialValue) {
    const paginationContainer = pagination;
    var listItems = paginationContainer.querySelectorAll("li");
    var currActive = parseInt(paginationContainer.dataset[this.DATA_KEY], 10);
   
    listItems.forEach((item) => {
      item.classList.remove(this.CLASS_ACTIVE);
      item.classList.remove(this.CLASS_SIBLING_ACTIVE);
    });
    
    // if(typeof e.currentTarget === 'object') { 
    //   currentPage = currActive;
    // }

    if(initialValue && this.internalPage > 1) { 
      currActive = this.internalPage - 1;
      paginationContainer.dataset[this.DATA_KEY] = currActive;
    }

    this.handleEventEmission(currActive)

    listItems[currActive].classList.add(this.CLASS_ACTIVE);

    if (currActive === 0) {
      paginationContainer.querySelector(".prev").classList.add(this.CLASS_DISABLED);
      paginationContainer.querySelector(".prev").disabled = true;
      
    } else {
      listItems[currActive - 1].classList.add(this.CLASS_SIBLING_ACTIVE);
      paginationContainer.querySelector(".prev").classList.remove(this.CLASS_DISABLED);
      paginationContainer.querySelector(".prev").disabled = false;
    }

    if (currActive === (listItems.length - 1)) {
      paginationContainer.querySelector(".next").classList.add(this.CLASS_DISABLED);
      paginationContainer.querySelector(".next").disabled = true;
     
    } else {
      paginationContainer.querySelector(".next").classList.remove(this.CLASS_DISABLED);
      paginationContainer.querySelector(".next").disabled = false;
    }
  }

  calculateVisiblePageIndices() { 
    var paginationElement = this.el.shadowRoot.querySelector(".pagination");
    this.initPagination(paginationElement)

  }

  render() {
    return (
      <div class="container">
        <div class='items__per-page-wrapper'>
          <div class='items__per-page-label'>Results per Page</div>
          <div class='items__per-page-field'>
           <ifx-select 
            type='single'
            value='undefined'
            ifx-size='s'
            placeholder='false'
            search-enabled='false'
            search-placeholder-value='Search...'
            ifx-disabled='false'
            ifx-error='false'
            ifx-error-message='Some error'
            ifx-label=''
            ifx-placeholder-value='Placeholder'
            ifx-options='[{"value":"ten","label":"10","selected":true},{"value":"twenty","label":"20","selected":false},{"value":"thirty","label":"30","selected":false}]' >
          </ifx-select>
          </div>
        </div>
        <div class='items__total-wrapper'>
          <div class='page__numbers-wrapper'>
          <div class="pagination">
            <ifx-icon-button variant='outline' class="prev" color='primary' icon='arrow-left-24'></ifx-icon-button>
            <ol>
              {this.numberOfPages.map((item) => 
              <li class={`${this.internalPage === item? 'active' : ""}`}><a href={undefined}>{item}</a></li>)}
            </ol>
            <ifx-icon-button class="next" variant='outline' color='primary' icon='arrow-right-24'></ifx-icon-button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}