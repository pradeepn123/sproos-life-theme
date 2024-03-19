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

/***/ "./js/components/get-data.js":
/*!***********************************!*\
  !*** ./js/components/get-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customerLocation: () => (/* binding */ customerLocation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");

var customerLocation = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    var data = yield fetch('/browsing_context_suggestions.json');
    var {
      detected_values: {
        country: {
          handle
        } = {}
      } = {}
    } = yield data.json();
    return handle;
  });
  return function customerLocation() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./js/components/svelte-wrapper.js":
/*!*****************************************!*\
  !*** ./js/components/svelte-wrapper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json-6 */ "./node_modules/json-6/dist/index.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_6__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((Component, container, propsEl) => {
  //component is a pre-compiled class
  //container is where you want to inject component
  //propEl pass prop when injecting
  var appContainer = document.querySelectorAll(container);
  return [...appContainer].map(appTarget => {
    var initialized = appTarget.dataset.initialized || false;
    var props = {};
    if (appTarget && !initialized) {
      var _props;
      if (propsEl) {
        var _appTarget$querySelec;
        props = json_6__WEBPACK_IMPORTED_MODULE_0___default().parse((_appTarget$querySelec = appTarget.querySelector(propsEl)) === null || _appTarget$querySelec === void 0 ? void 0 : _appTarget$querySelec.innerHTML) || {}; //get json from the script id 
      }
      //inject component into container
      var instance = new Component({
        target: appTarget,
        props: {
          shopifyData: (_props = props) === null || _props === void 0 ? void 0 : _props.data //pass the prop on data prop as default
        }
      });
      appTarget.dataset.initialized = true;
      return instance;
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

/***/ }),

/***/ "./js/components/svelte/AnnouncementBar.svelte":
/*!*****************************************************!*\
  !*** ./js/components/svelte/AnnouncementBar.svelte ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* harmony import */ var JsComponents_get_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! JsComponents/get-data */ "./js/components/get-data.js");
/* js/components/svelte/AnnouncementBar.svelte generated by Svelte v4.2.12 */






function instance($$self, $$props, $$invalidate) {
	let country;
	let { shopifyData } = $$props;
	const blockData = shopifyData;

	const handleLocationBasedAnnouncement = () => {
		for (let countryBlock in blockData) {
			if (blockData[countryBlock]?.handle?.includes(country)) {
				const announcementBar = document.querySelector("[data-announcement-bar]");
				announcementBar.classList.remove("hidden");

				announcementBar?.querySelectorAll("[ data-announcement-text]")?.forEach(text => {
					text.innerHTML = blockData[countryBlock]?.text;
				});

				break;
			}
		}
	};

	(0,svelte__WEBPACK_IMPORTED_MODULE_2__.onMount)(async () => {
		country = await (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_3__.customerLocation)();
		handleLocationBasedAnnouncement();
	});

	$$self.$$set = $$props => {
		if ('shopifyData' in $$props) $$invalidate(0, shopifyData = $$props.shopifyData);
	};

	return [shopifyData];
}

class AnnouncementBar extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, null, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { shopifyData: 0 });
	}

	get shopifyData() {
		return this.$$.ctx[0];
	}

	set shopifyData(shopifyData) {
		this.$$set({ shopifyData });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(AnnouncementBar, {"shopifyData":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnouncementBar);

/***/ })

}]);