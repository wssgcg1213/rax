'use strict';

import React, {Component} from 'react';

export default {
  getSelectTab: () => {
    let selectTabs = location.pathname.split('/');
    return{
    	selectNav: selectTabs[1],
    	selectSide: selectTabs[2]
    }
  }
};

