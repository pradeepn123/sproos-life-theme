"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["shared"],{

/***/ "./js/components/accordions.js":
/*!*************************************!*\
  !*** ./js/components/accordions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var selectors = {
  parent: '[data-accordion-parent]',
  trigger: '[data-accordion-trigger]',
  content: '[data-accordion-content]',
  activeClass: 'active'
};
var {
  parent: accordionParentSelector,
  trigger: accordionTrigger,
  content: accordionContent,
  activeClass
} = selectors || {};
var updateHeight = (content, open) => {
  open ? content.style.maxHeight = "".concat(content.scrollHeight, "px") : content.style.maxHeight = 0;
};
var setActive = (content, active) => {
  active ? content.classList.add(activeClass) : content.classList.remove(activeClass);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sectionParent => {
  var accordionParents = sectionParent.querySelectorAll(accordionParentSelector);
  accordionParents.forEach((parent, index) => {
    var accordionHeaders = parent.querySelector(accordionTrigger);
    var accordionContentEl = parent.querySelector(accordionContent);
    accordionHeaders.addEventListener('click', () => {
      if (parent.classList.contains(activeClass)) {
        setActive(parent, false);
        updateHeight(accordionContentEl, false);
        return;
      }
      var activeAccordionParent = sectionParent.querySelector("".concat(accordionParentSelector, ".").concat(activeClass));
      if (activeAccordionParent) {
        var activeAccordionContent = activeAccordionParent.querySelector(accordionContent);
        setActive(activeAccordionParent, false);
        updateHeight(activeAccordionContent, false);
      }
      parent.classList.add(activeClass);
      setActive(parent, true);
      updateHeight(accordionContentEl, true);
    });

    // Open the first accordion by default
    if (index === 0) {
      parent.classList.add(activeClass);
      setActive(parent, true);
      updateHeight(accordionContentEl, true);
    }
  });
});

/***/ }),

/***/ "./js/components/tabbed.js":
/*!*********************************!*\
  !*** ./js/components/tabbed.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var selectors = {
  parent: '[data-tab-parent]',
  trigger: '[data-tab-trigger]',
  content: '[data-tab-content]',
  activeClass: 'is__active'
};
var {
  parent: tabParentSelector,
  trigger: tabTrigger,
  content: tabContent,
  activeClass
} = selectors || {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sectionParent => {
  var tabbedParent = document.querySelector(tabParentSelector);
  var tabbedHeaders = (tabbedParent === null || tabbedParent === void 0 ? void 0 : tabbedParent.querySelectorAll(tabTrigger)) || [];
  var tabbedContent = (tabbedParent === null || tabbedParent === void 0 ? void 0 : tabbedParent.querySelectorAll(tabContent)) || [];
  var setActive = (index, active) => {
    if (active) {
      tabbedHeaders[index].classList.add(activeClass);
      tabbedContent[index].classList.add(activeClass);
    } else {
      tabbedHeaders[index].classList.remove(activeClass);
      tabbedContent[index].classList.remove(activeClass);
    }
  };
  tabbedHeaders.forEach(tab => {
    tab.addEventListener('click', () => {
      var activeTab = sectionParent.querySelector("".concat(tabTrigger, ".").concat(activeClass));
      var index = tab.dataset.index;
      if (tab.classList.contains(activeClass)) {
        return;
      }
      if (activeTab) {
        var activeIndex = activeTab.dataset.index;
        setActive(activeIndex, false);
      }
      setActive(index, true);
    });
  });
});

/***/ })

}]);