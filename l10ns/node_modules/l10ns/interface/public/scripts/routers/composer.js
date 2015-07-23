

define([

  'backbone',
  'jquery',
  
    'contents/LeftMenu/LeftMenuView',
    'contents/LeftMenu/LeftMenu'
    ,
  
    'contents/search/SearchView',
    'contents/search/Search'
    ,
  
    'contents/locales/LocalesView',
    'contents/locales/Locales'
    ,
  
    'contents/localizations/LocalizationsView',
    'contents/localizations/Localizations'
    ,
  
    'contents/localization/LocalizationView',
    'contents/localization/Localization'
    
  

], function(

  Backbone,
  $,
  
    LeftMenuView,
    LeftMenu
    ,
  
    SearchView,
    Search
    ,
  
    LocalesView,
    Locales
    ,
  
    LocalizationsView,
    Localizations
    ,
  
    LocalizationView,
    Localization
    
  

) {

  var Constructor = Backbone.Router.extend({

    routes : {
    
      ':locale/localizations' : 'compose :locale/localizations'
      ,
    
      ':locale/l/:id/:key' : 'compose :locale/l/:id/:key'
      
    
    },

    
      'compose :locale/localizations': function() {
        var _this = this
          , incorrectRegions = 0
          , n = 0;

        app.document.trigger('fetchstart', ':locale/localizations');

        

this.should = {};

  if(typeof app.views.leftmenu === 'undefined' || app.views.leftmenu.should(':locale/localizations') === 'update') {
    if(typeof app.views.leftmenu === 'undefined') {
      if(!document.querySelector('[data-content="leftmenu"]')) {
        this.should['leftmenu'] = 'update';
      }
      else {
        this.should['leftmenu'] = 'keep';
      }
    }
    else {
      this.should['leftmenu'] = app.views.leftmenu.should(':locale/localizations');
      Backbone.Relational.store.unregister(app.models.leftmenu);
    }
    app.models.leftmenu = new LeftMenu;
    app.views.leftmenu = new LeftMenuView(app.models.leftmenu);
      incorrectRegions++;
      setTimeout(function() {
        try {
          app.models.leftmenu.fetch({
            success: function() {
              _this.content['leftHeader'] = app.views.leftmenu.toHTML();
              if(typeof app.views.leftmenu.bindModel === 'function') {
                app.views.leftmenu.bindModel();
              }
              n++;
              if(n === incorrectRegions) {
                app.document.trigger('fetchend', ':locale/localizations');
                _this['render :locale/localizations']();
              }
            }
          });
        }
        catch(err) {
          if(err.message === 'A "url" property or function must be specified') {
            _this.content['leftHeader'] = app.views.leftmenu.toHTML();
            n++;
            if(n === incorrectRegions) {
              app.document.trigger('fetchend', ':locale/localizations');
              _this['render :locale/localizations']();
            }
          }
          else {
            throw err;
          }
        }
      }, 0);
  }
  else if(app.views.leftmenu.should(':locale/localizations') === 'remove') {
    app.views.leftmenu.hide();
  }
  else {
    app.views.leftmenu.show();
  }

  if(typeof app.views.search === 'undefined' || app.views.search.should(':locale/localizations') === 'update') {
    if(typeof app.views.search === 'undefined') {
      if(!document.querySelector('[data-content="search"]')) {
        this.should['search'] = 'update';
      }
      else {
        this.should['search'] = 'keep';
      }
    }
    else {
      this.should['search'] = app.views.search.should(':locale/localizations');
      Backbone.Relational.store.unregister(app.models.search);
    }
    app.models.search = new Search;
    app.views.search = new SearchView(app.models.search);
      incorrectRegions++;
      setTimeout(function() {
        try {
          app.models.search.fetch({
            success: function() {
              _this.content['search'] = app.views.search.toHTML();
              if(typeof app.views.search.bindModel === 'function') {
                app.views.search.bindModel();
              }
              n++;
              if(n === incorrectRegions) {
                app.document.trigger('fetchend', ':locale/localizations');
                _this['render :locale/localizations']();
              }
            }
          });
        }
        catch(err) {
          if(err.message === 'A "url" property or function must be specified') {
            _this.content['search'] = app.views.search.toHTML();
            n++;
            if(n === incorrectRegions) {
              app.document.trigger('fetchend', ':locale/localizations');
              _this['render :locale/localizations']();
            }
          }
          else {
            throw err;
          }
        }
      }, 0);
  }
  else if(app.views.search.should(':locale/localizations') === 'remove') {
    app.views.search.hide();
  }
  else {
    app.views.search.show();
  }

  if(typeof app.views.locales === 'undefined' || app.views.locales.should(':locale/localizations') === 'update') {
    if(typeof app.views.locales === 'undefined') {
      if(!document.querySelector('[data-content="locales"]')) {
        this.should['locales'] = 'update';
      }
      else {
        this.should['locales'] = 'keep';
      }
    }
    else {
      this.should['locales'] = app.views.locales.should(':locale/localizations');
      Backbone.Relational.store.unregister(app.models.locales);
    }
    app.models.locales = new Locales;
    app.views.locales = new LocalesView(app.models.locales);
      incorrectRegions++;
      setTimeout(function() {
        try {
          app.models.locales.fetch({
            success: function() {
              _this.content['locales'] = app.views.locales.toHTML();
              if(typeof app.views.locales.bindModel === 'function') {
                app.views.locales.bindModel();
              }
              n++;
              if(n === incorrectRegions) {
                app.document.trigger('fetchend', ':locale/localizations');
                _this['render :locale/localizations']();
              }
            }
          });
        }
        catch(err) {
          if(err.message === 'A "url" property or function must be specified') {
            _this.content['locales'] = app.views.locales.toHTML();
            n++;
            if(n === incorrectRegions) {
              app.document.trigger('fetchend', ':locale/localizations');
              _this['render :locale/localizations']();
            }
          }
          else {
            throw err;
          }
        }
      }, 0);
  }
  else if(app.views.locales.should(':locale/localizations') === 'remove') {
    app.views.locales.hide();
  }
  else {
    app.views.locales.show();
  }

  if(typeof app.views.localizations === 'undefined' || app.views.localizations.should(':locale/localizations') === 'update') {
    if(typeof app.views.localizations === 'undefined') {
      if(!document.querySelector('[data-content="localizations"]')) {
        this.should['localizations'] = 'update';
      }
      else {
        this.should['localizations'] = 'keep';
      }
    }
    else {
      this.should['localizations'] = app.views.localizations.should(':locale/localizations');
      Backbone.Relational.store.unregister(app.models.localizations);
    }
    app.models.localizations = new Localizations;
    app.views.localizations = new LocalizationsView(app.models.localizations);
      incorrectRegions++;
      setTimeout(function() {
        try {
          app.models.localizations.fetch({
            success: function() {
              _this.content['body'] = app.views.localizations.toHTML();
              if(typeof app.views.localizations.bindModel === 'function') {
                app.views.localizations.bindModel();
              }
              n++;
              if(n === incorrectRegions) {
                app.document.trigger('fetchend', ':locale/localizations');
                _this['render :locale/localizations']();
              }
            }
          });
        }
        catch(err) {
          if(err.message === 'A "url" property or function must be specified') {
            _this.content['body'] = app.views.localizations.toHTML();
            n++;
            if(n === incorrectRegions) {
              app.document.trigger('fetchend', ':locale/localizations');
              _this['render :locale/localizations']();
            }
          }
          else {
            throw err;
          }
        }
      }, 0);
  }
  else if(app.views.localizations.should(':locale/localizations') === 'remove') {
    app.views.localizations.hide();
  }
  else {
    app.views.localizations.show();
  }



        for(var view in app.views) {
          if(

  view !== 'leftmenu'
   && 

  view !== 'search'
   && 

  view !== 'locales'
   && 

  view !== 'localizations'
  

) {
            app.views[view].remove();
            delete app.views[view];
            if(typeof app.models[view] !== 'undefined') {
              Backbone.Relational.store.unregister(app.models[view]);
              delete app.models[view];
            }
          }
        }
      },
    
      'compose :locale/l/:id/:key': function() {
        var _this = this
          , incorrectRegions = 0
          , n = 0;

        app.document.trigger('fetchstart', ':locale/l/:id/:key');

        

this.should = {};

  if(typeof app.views.leftmenu === 'undefined' || app.views.leftmenu.should(':locale/l/:id/:key') === 'update') {
    if(typeof app.views.leftmenu === 'undefined') {
      if(!document.querySelector('[data-content="leftmenu"]')) {
        this.should['leftmenu'] = 'update';
      }
      else {
        this.should['leftmenu'] = 'keep';
      }
    }
    else {
      this.should['leftmenu'] = app.views.leftmenu.should(':locale/l/:id/:key');
      Backbone.Relational.store.unregister(app.models.leftmenu);
    }
    app.models.leftmenu = new LeftMenu;
    app.views.leftmenu = new LeftMenuView(app.models.leftmenu);
      incorrectRegions++;
      setTimeout(function() {
        try {
          app.models.leftmenu.fetch({
            success: function() {
              _this.content['leftHeader'] = app.views.leftmenu.toHTML();
              if(typeof app.views.leftmenu.bindModel === 'function') {
                app.views.leftmenu.bindModel();
              }
              n++;
              if(n === incorrectRegions) {
                app.document.trigger('fetchend', ':locale/l/:id/:key');
                _this['render :locale/l/:id/:key']();
              }
            }
          });
        }
        catch(err) {
          if(err.message === 'A "url" property or function must be specified') {
            _this.content['leftHeader'] = app.views.leftmenu.toHTML();
            n++;
            if(n === incorrectRegions) {
              app.document.trigger('fetchend', ':locale/l/:id/:key');
              _this['render :locale/l/:id/:key']();
            }
          }
          else {
            throw err;
          }
        }
      }, 0);
  }
  else if(app.views.leftmenu.should(':locale/l/:id/:key') === 'remove') {
    app.views.leftmenu.hide();
  }
  else {
    app.views.leftmenu.show();
  }

  if(typeof app.views.search === 'undefined' || app.views.search.should(':locale/l/:id/:key') === 'update') {
    if(typeof app.views.search === 'undefined') {
      if(!document.querySelector('[data-content="search"]')) {
        this.should['search'] = 'update';
      }
      else {
        this.should['search'] = 'keep';
      }
    }
    else {
      this.should['search'] = app.views.search.should(':locale/l/:id/:key');
      Backbone.Relational.store.unregister(app.models.search);
    }
    app.models.search = new Search;
    app.views.search = new SearchView(app.models.search);
      incorrectRegions++;
      setTimeout(function() {
        try {
          app.models.search.fetch({
            success: function() {
              _this.content['search'] = app.views.search.toHTML();
              if(typeof app.views.search.bindModel === 'function') {
                app.views.search.bindModel();
              }
              n++;
              if(n === incorrectRegions) {
                app.document.trigger('fetchend', ':locale/l/:id/:key');
                _this['render :locale/l/:id/:key']();
              }
            }
          });
        }
        catch(err) {
          if(err.message === 'A "url" property or function must be specified') {
            _this.content['search'] = app.views.search.toHTML();
            n++;
            if(n === incorrectRegions) {
              app.document.trigger('fetchend', ':locale/l/:id/:key');
              _this['render :locale/l/:id/:key']();
            }
          }
          else {
            throw err;
          }
        }
      }, 0);
  }
  else if(app.views.search.should(':locale/l/:id/:key') === 'remove') {
    app.views.search.hide();
  }
  else {
    app.views.search.show();
  }

  if(typeof app.views.locales === 'undefined' || app.views.locales.should(':locale/l/:id/:key') === 'update') {
    if(typeof app.views.locales === 'undefined') {
      if(!document.querySelector('[data-content="locales"]')) {
        this.should['locales'] = 'update';
      }
      else {
        this.should['locales'] = 'keep';
      }
    }
    else {
      this.should['locales'] = app.views.locales.should(':locale/l/:id/:key');
      Backbone.Relational.store.unregister(app.models.locales);
    }
    app.models.locales = new Locales;
    app.views.locales = new LocalesView(app.models.locales);
      incorrectRegions++;
      setTimeout(function() {
        try {
          app.models.locales.fetch({
            success: function() {
              _this.content['locales'] = app.views.locales.toHTML();
              if(typeof app.views.locales.bindModel === 'function') {
                app.views.locales.bindModel();
              }
              n++;
              if(n === incorrectRegions) {
                app.document.trigger('fetchend', ':locale/l/:id/:key');
                _this['render :locale/l/:id/:key']();
              }
            }
          });
        }
        catch(err) {
          if(err.message === 'A "url" property or function must be specified') {
            _this.content['locales'] = app.views.locales.toHTML();
            n++;
            if(n === incorrectRegions) {
              app.document.trigger('fetchend', ':locale/l/:id/:key');
              _this['render :locale/l/:id/:key']();
            }
          }
          else {
            throw err;
          }
        }
      }, 0);
  }
  else if(app.views.locales.should(':locale/l/:id/:key') === 'remove') {
    app.views.locales.hide();
  }
  else {
    app.views.locales.show();
  }

  if(typeof app.views.localizations === 'undefined' || app.views.localizations.should(':locale/l/:id/:key') === 'update') {
    if(typeof app.views.localizations === 'undefined') {
      if(!document.querySelector('[data-content="localizations"]')) {
        this.should['localizations'] = 'update';
      }
      else {
        this.should['localizations'] = 'keep';
      }
    }
    else {
      this.should['localizations'] = app.views.localizations.should(':locale/l/:id/:key');
      Backbone.Relational.store.unregister(app.models.localizations);
    }
    app.models.localizations = new Localizations;
    app.views.localizations = new LocalizationsView(app.models.localizations);
      incorrectRegions++;
      setTimeout(function() {
        try {
          app.models.localizations.fetch({
            success: function() {
              _this.content['body'] = app.views.localizations.toHTML();
              if(typeof app.views.localizations.bindModel === 'function') {
                app.views.localizations.bindModel();
              }
              n++;
              if(n === incorrectRegions) {
                app.document.trigger('fetchend', ':locale/l/:id/:key');
                _this['render :locale/l/:id/:key']();
              }
            }
          });
        }
        catch(err) {
          if(err.message === 'A "url" property or function must be specified') {
            _this.content['body'] = app.views.localizations.toHTML();
            n++;
            if(n === incorrectRegions) {
              app.document.trigger('fetchend', ':locale/l/:id/:key');
              _this['render :locale/l/:id/:key']();
            }
          }
          else {
            throw err;
          }
        }
      }, 0);
  }
  else if(app.views.localizations.should(':locale/l/:id/:key') === 'remove') {
    app.views.localizations.hide();
  }
  else {
    app.views.localizations.show();
  }

  if(typeof app.views.localization === 'undefined' || app.views.localization.should(':locale/l/:id/:key') === 'update') {
    if(typeof app.views.localization === 'undefined') {
      if(!document.querySelector('[data-content="localization"]')) {
        this.should['localization'] = 'update';
      }
      else {
        this.should['localization'] = 'keep';
      }
    }
    else {
      this.should['localization'] = app.views.localization.should(':locale/l/:id/:key');
      Backbone.Relational.store.unregister(app.models.localization);
    }
    app.models.localization = new Localization;
    app.views.localization = new LocalizationView(app.models.localization);
      incorrectRegions++;
      setTimeout(function() {
        try {
          app.models.localization.fetch({
            success: function() {
              _this.content['localization'] = app.views.localization.toHTML();
              if(typeof app.views.localization.bindModel === 'function') {
                app.views.localization.bindModel();
              }
              n++;
              if(n === incorrectRegions) {
                app.document.trigger('fetchend', ':locale/l/:id/:key');
                _this['render :locale/l/:id/:key']();
              }
            }
          });
        }
        catch(err) {
          if(err.message === 'A "url" property or function must be specified') {
            _this.content['localization'] = app.views.localization.toHTML();
            n++;
            if(n === incorrectRegions) {
              app.document.trigger('fetchend', ':locale/l/:id/:key');
              _this['render :locale/l/:id/:key']();
            }
          }
          else {
            throw err;
          }
        }
      }, 0);
  }
  else if(app.views.localization.should(':locale/l/:id/:key') === 'remove') {
    app.views.localization.hide();
  }
  else {
    app.views.localization.show();
  }



        for(var view in app.views) {
          if(

  view !== 'leftmenu'
   && 

  view !== 'search'
   && 

  view !== 'locales'
   && 

  view !== 'localizations'
   && 

  view !== 'localization'
  

) {
            app.views[view].remove();
            delete app.views[view];
            if(typeof app.models[view] !== 'undefined') {
              Backbone.Relational.store.unregister(app.models[view]);
              delete app.models[view];
            }
          }
        }
      },
    

    
    'render :locale/localizations': function() {
      app.document.trigger('renderstart');
      if(document.querySelectorAll('[data-layout=app]').length) {
        


    app.document.trigger('renderleftmenustart');
    try {
      if(this.should['leftmenu'] === 'update') {
        var $region = document.querySelector('[data-region="leftHeader"]');
        $region.innerHTML = this.content['leftHeader'];
      }
      if(app.views.el !== '<div></div>') {
        app.views.leftmenu.setElement('[data-content="leftmenu"]');
      }
      if(!app.views.leftmenu.boundDOM) {
        app.views.leftmenu.bindDOM();
        app.views.leftmenu.boundDOM = true;
      }
      if(typeof app.views.leftmenu.onFinishRendering === 'function') {
        app.views.leftmenu.onFinishRendering();
      }
    }
    catch(err) {
      throw err;
    }
    app.document.trigger('renderleftmenuend');

    app.document.trigger('rendersearchstart');
    try {
      if(this.should['search'] === 'update') {
        var $region = document.querySelector('[data-region="search"]');
        $region.innerHTML = this.content['search'];
      }
      if(app.views.el !== '<div></div>') {
        app.views.search.setElement('[data-content="search"]');
      }
      if(!app.views.search.boundDOM) {
        app.views.search.bindDOM();
        app.views.search.boundDOM = true;
      }
      if(typeof app.views.search.onFinishRendering === 'function') {
        app.views.search.onFinishRendering();
      }
    }
    catch(err) {
      throw err;
    }
    app.document.trigger('rendersearchend');

    app.document.trigger('renderlocalesstart');
    try {
      if(this.should['locales'] === 'update') {
        var $region = document.querySelector('[data-region="locales"]');
        $region.innerHTML = this.content['locales'];
      }
      if(app.views.el !== '<div></div>') {
        app.views.locales.setElement('[data-content="locales"]');
      }
      if(!app.views.locales.boundDOM) {
        app.views.locales.bindDOM();
        app.views.locales.boundDOM = true;
      }
      if(typeof app.views.locales.onFinishRendering === 'function') {
        app.views.locales.onFinishRendering();
      }
    }
    catch(err) {
      throw err;
    }
    app.document.trigger('renderlocalesend');

    app.document.trigger('renderlocalizationsstart');
    try {
      if(this.should['localizations'] === 'update') {
        var $region = document.querySelector('[data-region="body"]');
        $region.innerHTML = this.content['body'];
      }
      if(app.views.el !== '<div></div>') {
        app.views.localizations.setElement('[data-content="localizations"]');
      }
      if(!app.views.localizations.boundDOM) {
        app.views.localizations.bindDOM();
        app.views.localizations.boundDOM = true;
      }
      if(typeof app.views.localizations.onFinishRendering === 'function') {
        app.views.localizations.onFinishRendering();
      }
    }
    catch(err) {
      throw err;
    }
    app.document.trigger('renderlocalizationsend');


      }
      else {
        app.$layout.remove();
        app.$body.append(app.layoutTmpls.app({
          


  leftHeader : this.content['leftmenu']
  ,

  search : this.content['search']
  ,

  locales : this.content['locales']
  ,

  body : this.content['localizations']
  


        }));
      }

      app.document.trigger('renderend');
    },
    
    'render :locale/l/:id/:key': function() {
      app.document.trigger('renderstart');
      if(document.querySelectorAll('[data-layout=app]').length) {
        


    app.document.trigger('renderleftmenustart');
    try {
      if(this.should['leftmenu'] === 'update') {
        var $region = document.querySelector('[data-region="leftHeader"]');
        $region.innerHTML = this.content['leftHeader'];
      }
      if(app.views.el !== '<div></div>') {
        app.views.leftmenu.setElement('[data-content="leftmenu"]');
      }
      if(!app.views.leftmenu.boundDOM) {
        app.views.leftmenu.bindDOM();
        app.views.leftmenu.boundDOM = true;
      }
      if(typeof app.views.leftmenu.onFinishRendering === 'function') {
        app.views.leftmenu.onFinishRendering();
      }
    }
    catch(err) {
      throw err;
    }
    app.document.trigger('renderleftmenuend');

    app.document.trigger('rendersearchstart');
    try {
      if(this.should['search'] === 'update') {
        var $region = document.querySelector('[data-region="search"]');
        $region.innerHTML = this.content['search'];
      }
      if(app.views.el !== '<div></div>') {
        app.views.search.setElement('[data-content="search"]');
      }
      if(!app.views.search.boundDOM) {
        app.views.search.bindDOM();
        app.views.search.boundDOM = true;
      }
      if(typeof app.views.search.onFinishRendering === 'function') {
        app.views.search.onFinishRendering();
      }
    }
    catch(err) {
      throw err;
    }
    app.document.trigger('rendersearchend');

    app.document.trigger('renderlocalesstart');
    try {
      if(this.should['locales'] === 'update') {
        var $region = document.querySelector('[data-region="locales"]');
        $region.innerHTML = this.content['locales'];
      }
      if(app.views.el !== '<div></div>') {
        app.views.locales.setElement('[data-content="locales"]');
      }
      if(!app.views.locales.boundDOM) {
        app.views.locales.bindDOM();
        app.views.locales.boundDOM = true;
      }
      if(typeof app.views.locales.onFinishRendering === 'function') {
        app.views.locales.onFinishRendering();
      }
    }
    catch(err) {
      throw err;
    }
    app.document.trigger('renderlocalesend');

    app.document.trigger('renderlocalizationsstart');
    try {
      if(this.should['localizations'] === 'update') {
        var $region = document.querySelector('[data-region="body"]');
        $region.innerHTML = this.content['body'];
      }
      if(app.views.el !== '<div></div>') {
        app.views.localizations.setElement('[data-content="localizations"]');
      }
      if(!app.views.localizations.boundDOM) {
        app.views.localizations.bindDOM();
        app.views.localizations.boundDOM = true;
      }
      if(typeof app.views.localizations.onFinishRendering === 'function') {
        app.views.localizations.onFinishRendering();
      }
    }
    catch(err) {
      throw err;
    }
    app.document.trigger('renderlocalizationsend');

    app.document.trigger('renderlocalizationstart');
    try {
      if(this.should['localization'] === 'update') {
        var $region = document.querySelector('[data-region="localization"]');
        $region.innerHTML = this.content['localization'];
      }
      if(app.views.el !== '<div></div>') {
        app.views.localization.setElement('[data-content="localization"]');
      }
      if(!app.views.localization.boundDOM) {
        app.views.localization.bindDOM();
        app.views.localization.boundDOM = true;
      }
      if(typeof app.views.localization.onFinishRendering === 'function') {
        app.views.localization.onFinishRendering();
      }
    }
    catch(err) {
      throw err;
    }
    app.document.trigger('renderlocalizationend');


      }
      else {
        app.$layout.remove();
        app.$body.append(app.layoutTmpls.app({
          


  leftHeader : this.content['leftmenu']
  ,

  search : this.content['search']
  ,

  locales : this.content['locales']
  ,

  body : this.content['localizations']
  ,

  localization : this.content['localization']
  


        }));
      }

      app.document.trigger('renderend');
    },
    
  });

  Constructor.prototype.content = {};
  return Constructor;
});
