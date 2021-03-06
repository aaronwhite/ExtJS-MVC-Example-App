Ext.data.JsonP.Ext_env_Browser({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "Browser.html#Ext-env-Browser",
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with Ext.Base.override</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callParent",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Base3.html#Ext-Base-method-initConfig",
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The OS name to check</p>\n",
            "name": "value"
          }
        ],
        "href": "Browser.html#Ext-env-Browser-method-is",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/env/Browser.js",
        "private": false,
        "shortDoc": "A \"hybrid\" property, can be either accessed as a method call, i.e:\n\nif (Ext.browser.is('IE')) { ... ...",
        "static": false,
        "name": "is",
        "owner": "Ext.env.Browser",
        "doc": "<p>A \"hybrid\" property, can be either accessed as a method call, i.e:</p>\n\n<pre><code>if (Ext.browser.is('IE')) { ... }\n</code></pre>\n\n\n<p>or as an object with boolean properties, i.e:</p>\n\n<pre><code>if (Ext.browser.is.IE) { ... }\n</code></pre>\n\n\n<p>Versions can be conveniently checked as well. For example:</p>\n\n<pre><code>if (Ext.browser.is.IE6) { ... } // Equivalent to (Ext.browser.is.IE && Ext.browser.version.equals(6))\n</code></pre>\n\n\n<p>Note that only <a href=\"#/api/Ext.Version-method-getMajor\" rel=\"Ext.Version-method-getMajor\" class=\"docClass\">major component</a>  and <a href=\"#/api/Ext.Version-method-getShortVersion\" rel=\"Ext.Version-method-getShortVersion\" class=\"docClass\">shortVersion</a>\nvalue of the version are available via direct property checking.</p>\n\n<p>Supported values are: IE, Firefox, Safari, Chrome, Opera, WebKit, Gecko, Presto, Trident and Other</p>\n",
        "linenr": 66,
        "html_filename": "Browser.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-statics",
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "html_filename": "Base3.html"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Browser.html#Ext-env-Browser-property-engineName",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/env/Browser.js",
        "private": false,
        "static": false,
        "name": "engineName",
        "owner": "Ext.env.Browser",
        "doc": "<p>Read-only - the full name of the current browser's engine\nPossible values are: WebKit, Gecko, Presto, Trident and Other</p>\n",
        "linenr": 106,
        "html_filename": "Browser.html"
      },
      {
        "inheritable": false,
        "type": "Ext.Version",
        "deprecated": null,
        "href": "Browser.html#Ext-env-Browser-property-engineVersion",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/env/Browser.js",
        "private": false,
        "static": false,
        "name": "engineVersion",
        "owner": "Ext.env.Browser",
        "doc": "<p>Read-only, refer to <a href=\"#/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a></p>\n",
        "linenr": 113,
        "html_filename": "Browser.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Browser.html#Ext-env-Browser-property-isSecure",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/env/Browser.js",
        "private": false,
        "static": false,
        "name": "isSecure",
        "owner": "Ext.env.Browser",
        "doc": "<p>True if the page is running over SSL</p>\n",
        "linenr": 54,
        "html_filename": "Browser.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Browser.html#Ext-env-Browser-property-isStrict",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/env/Browser.js",
        "private": false,
        "static": false,
        "name": "isStrict",
        "owner": "Ext.env.Browser",
        "doc": "<p>True if the document is in strict mode</p>\n",
        "linenr": 60,
        "html_filename": "Browser.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Browser.html#Ext-env-Browser-property-name",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/env/Browser.js",
        "private": false,
        "static": false,
        "name": "name",
        "owner": "Ext.env.Browser",
        "doc": "<p>Read-only - the full name of the current browser\nPossible values are: IE, Firefox, Safari, Chrome, Opera and Other</p>\n",
        "linenr": 93,
        "html_filename": "Browser.html"
      },
      {
        "inheritable": false,
        "type": "Class",
        "deprecated": null,
        "href": "Base3.html#Ext-Base-property-self",
        "protected": true,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "type": "Ext.Version",
        "deprecated": null,
        "href": "Browser.html#Ext-env-Browser-property-version",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/env/Browser.js",
        "private": false,
        "static": false,
        "name": "version",
        "owner": "Ext.env.Browser",
        "doc": "<p>Read-only, refer to <a href=\"#/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a></p>\n",
        "linenr": 100,
        "html_filename": "Browser.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/env/Browser.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.env.Browser",
  "doc": "<p>Provide useful information about the current browser.\nShould not be manually instantiated unless for unit-testing; access the global instance stored in Ext.browser instead. Example:</p>\n\n<pre><code>if (Ext.browser.is.IE) {\n     // IE specific code here\n}\n\nif (Ext.browser.is.WebKit) {\n     // WebKit specific code here\n}\n\nconsole.log(\"Version \" + Ext.browser.version);\n</code></pre>\n\n\n<p>For a full list of supported values, refer to: <a href=\"#/api/Ext.env.Browser-method-is\" rel=\"Ext.env.Browser-method-is\" class=\"docClass\">is</a></p>\n\n<p>@borrows Ext.Base.extend</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Browser.html",
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.Base"
});