"use strict";angular.module("app",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(e,t){t.when("","/home"),e.state("home",{url:"/home",template:"<home></home>"}).state("encounter",{url:"/encounter",template:"<encounter></encounter>"}).state("desc",{url:"/desc",template:"<desc></desc>"}).state("nature",{url:"/nature",template:"<nature></nature>"}).state("berry",{url:"/berry",template:"<berry></berry>"})}]),angular.module("app").controller("ctrl",["$scope","$state","service",function(e,t,r){}]),angular.module("app").service("service",["$http","$q",function(e,t){this.getSpecies=function(){return e({url:"http://pokeapi.co/api/v2/pokemon-species/torchic/",method:"GET"})},this.getNature=function(){return e({url:"http://pokeapi.co/api/v2/nature/gentle/",method:"GET"})},this.getBerry=function(){return e({url:"http://pokeapi.co/api/v2/berry/petaya/",method:"GET"})}}]),angular.module("app").directive("berry",[function(){return{templateUrl:"./views/berryDir.html",restrict:"E",scope:{},controller:["$scope","service",function(e,t){!function(){t.getSpecies().then(function(t){e.name=t.data.name})}(),function(){t.getBerry().then(function(t){e.flavor=t.data.flavors[3].flavor.name,e.berry=t.data.item.name})}()}]}}]),angular.module("app").directive("desc",[function(){return{templateUrl:"./views/descDir.html",restrict:"E",scope:{},controller:["$scope","service",function(e,t){!function(){t.getSpecies().then(function(t){e.text=t.data.flavor_text_entries[1].flavor_text})}()}]}}]),angular.module("app").directive("encounter",[function(){return{templateUrl:"./views/encounterDir.html",restrict:"E",scope:{},controller:["$scope","service",function(e,t){!function(){t.getSpecies().then(function(t){e.habitat=t.data.habitat.name,e.name=t.data.name})}()}]}}]),angular.module("app").directive("home",[function(){return{templateUrl:"./views/homeDir.html",restrict:"E",scope:{},controller:["$scope","service",function(e,t){}]}}]),angular.module("app").directive("nature",[function(){return{templateUrl:"./views/natureDir.html",restrict:"E",scope:{},controller:["$scope","service",function(e,t){!function(){t.getSpecies().then(function(t){e.name=t.data.name})}(),function(){t.getNature().then(function(t){e.nature=t.data.name,e.preference=t.data.likes_flavor.name})}()}]}}]);
//# sourceMappingURL=bundle.js.map
