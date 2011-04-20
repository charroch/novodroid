// ==========================================================================
// Project:   Novodroid - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Novodroid */

// This page describes the main user interface for your application.
Novodroid.mainPage = SC.Page.design({
  
  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'workspaceView'.w(),
    classNames: ['clock'],
    workspaceView: SC.SplitView.design({
      dividerThickness: 1,
      defaultThickness: 300,
      topLeftView: SC.SourceListView.design({
        content: ["Devin Torres", "Charles Jolley", "Peter Wagenet"]
        }),

      bottomRightView: SC.View
    })
  })
});
