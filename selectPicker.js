/**
 * Version 1.0.0
 * Created By Rahul Kumar Jain
 * Select Picker
 * ***/
'use strict';

var wcDirectivesApp = angular.module ('wc.directives', []);


wcDirectivesApp.directive ('selectValue', [selectValueDirective]);
wcDirectivesApp.directive ('selectObject', [selectObjectDirective]);
wcDirectivesApp.directive ('selectObjectMul', [selectObjectMulDirective]);

function selectValueDirective ()
{
	return {
		restrict : 'AE',
		scope : {
			taList : '=',
			taLabel : '=',
			taValue : "=",
			taSearch : '=',
			taNoLine: '=',
			taChange : '&',
			taRequired : '=',
			taDisabled : '=',
			taLabelHide : '='
		},
		template : ''
			+'<div layout="column">'
			+	'<md-input-container>'
			+		'<label ng-hide="taLabelHide">{{taLabel}}</label>'
			+		'<md-select  aria-label="selectPicker" style="min-width:200px;" ng-model="taValue" ng-change="click_select(taValue)" ng-class="taNoLine ? \'md-no-underline\' : null"  md-on-close="clearSearchTerm()" ng-required="taRequired ? true : false" ng-disabled="taDisabled ? true : false">'
			+			'<md-select-header ng-show="taSearch" layout-align="center center" style="overflow: hidden;width:97.5%;background-color:white;position: fixed;z-index: 9999;" class="md-padding">'
			+				'<div align="center" style="margin-top:3px;">'
			+					'<input ng-model="selectFilter" placeholder="&#xF002;" type="search" class="form-control input-sm fa"/>'
			+				'</div>'
			+			'</md-select-header>'
			+			'<div style="margin-top:65px;" ng-if="taSearch"></div>'
			+			'<md-option ng-value="selectedData.id"	ng-repeat="selectedData in taList | filter:selectFilter">{{selectedData.name}}</md-option>'
			+		'</md-select>'
			+	'</md-input-container>'
			+'</div>',
			controller: ['$scope','$element', function SelectController($scope,$element) 
			{
				
				 $element.find('input').on('keydown', function(ev) {
			          ev.stopPropagation();
			      })
				 
				 $scope.clearSearchTerm = function() {
				        $scope.selectFilter = '';
				 }; 
				 
				 $scope.click_select = function (data)
				 {
					 $scope.taChange ({'data' : data});
				 }
			}],
	};
}

function selectValueMulDirective ()
{
	return {
		restrict : 'AE',
		scope : {
			taList : '=',
			taLabel : '=',
			taValue : "=",
			taSearch : '=',
			taNoLine: '=',
			taChange : '&',
			taRequired : '=',
			taDisabled : '=',
			taLabelHide : '='
		},
		template : ''
			+'<md-input-container flex class="md-block">'
			+	'<label ng-hide="taLabelHide">{{taLabel}}</label>'
			+	'<md-select  aria-label="selectPicker" style="min-width:200px;" ng-model="taValue" ng-change="click_select(taValue)" ng-class="taNoLine ? \'md-no-underline\' : null"  md-on-close="clearSearchTerm()" ng-required="taRequired ? true : false" ng-disabled="taDisabled ? true : false">'
			+		'<md-select-header ng-show="taSearch" layout-align="center center" style="overflow: hidden;width:97.5%;background-color:white;position: fixed;z-index: 9999;" class="md-padding">'
			+'			<div style="padding:10px;">'
			+'				<input ng-model="selectFilter" placeholder="&#xF002;" type="search" class="form-control input-sm fa"/>'
			+'				<div layout="row" layout-align="center center">'
			+'					<md-button class="md-raised" ng-click="click_selectAll()">Select All</md-button>'
			+'					<md-button class="md-raised" ng-click="click_deselectAll()">Deselect All</md-button>'
			+'				</div>'
			+'			</div>'
			+		'</md-select-header>'
			+		'<div style="margin-top:65px;" ng-if="taSearch"></div>'
			+		'<md-option ng-value="selectedData.id"	ng-repeat="selectedData in taList | filter:selectFilter">{{selectedData.name}}</md-option>'
			+	'</md-select>'
			+'</md-input-container>',
			controller: ['$scope','$element', function SelectController($scope,$element) 
			{
				
				 $element.find('input').on('keydown', function(ev) {
			          ev.stopPropagation();
			      })
				 
				 $scope.clearSearchTerm = function() {
				        $scope.selectFilter = '';
				 };
				 
				 
				 $scope.click_selectAll = function ()
				 {
					 $scope.taValue = $scope.taList;
				 }
				 
				 $scope.click_deselectAll = function ()
				 {
					 $scope.taValue = [];
				 }
				 
				 
				 $scope.click_select = function (data)
				 {
					 $scope.taChange ({'data' : data});
				 }
			}],
	};
}

function selectObjectDirective ()
{
	return {
		restrict : 'AE',
		scope : {
			taList : '=',
			taLabel : '=',
			taValue : "=",
			taSearch : '=',
			taNoLine: '=',
			taChange : '&',
			taRequired : '=',
			taDisabled : '=',
			taLabelHide : '='
		},
		template : ''
			+'<md-input-container flex class="md-block">'
			+	'<label ng-hide="taLabelHide">{{taLabel}}</label>'
			+	'<md-select  aria-label="selectPicker" style="min-width:200px;" ng-model="taValue" ng-change="click_select(taValue)" ng-class="taNoLine ? \'md-no-underline\' : null"  md-on-close="clearSearchTerm()" ng-required="taRequired ? true : false" ng-disabled="taDisabled ? true : false">'
			+		'<md-select-header ng-show="taSearch" layout-align="center center" style="overflow: hidden;width:97.5%;background-color:white;position: fixed;z-index: 9999;" class="md-padding">'
			+			'<div align="center" style="margin-top:3px;">'
			+				'<input ng-model="selectFilter" placeholder="&#xF002;" type="search" class="form-control input-sm fa"/>'
			+			'</div>'
			+		'</md-select-header>'
			+		'<div style="margin-top:65px;" ng-if="taSearch"></div>'
			+		'<md-option ng-value="selectedData"	ng-repeat="selectedData in taList | filter:selectFilter">{{selectedData.name}}</md-option>'
			+	'</md-select>'
			+'</md-input-container>',
			controller: ['$scope','$element', function SelectController($scope,$element) 
			{
				
				 $element.find('input').on('keydown', function(ev) {
			          ev.stopPropagation();
			      })
				 
				 $scope.clearSearchTerm = function() {
				        $scope.selectFilter = '';
				 };
				 
				 $scope.click_select = function (data)
				 {
					 $scope.taChange ({'data' : data});
				 }
			}],
	};
}

function selectObjectMulDirective ()
{
	return {
		restrict : 'AE',
		scope : {
			taList : '=',
			taLabel : '=',
			taValue : "=",
			taSearch : '=',
			taNoLine: '=',
			taChange : '&',
		},
		controller: ['$scope','$element','$timeout', function SelectController($scope,$element,$timeout) 
		{
			 $element.find('input').on('keydown', function(ev) {
		          ev.stopPropagation();
		      });
			  
			 $scope.clearSearchTerm = function() {
			        $scope.selectFilter = '';
			 };
			 
			 $scope.click_selectAll = function ()
			 {
				 $scope.taValue = $scope.taList;
			 }
			 
			 $scope.click_deselectAll = function ()
			 {
				 $scope.taValue = [];
			 }
			 
			 $scope.click_select = function (data)
			 {
				 $scope.taChange ({'data' : data});
			 }
		}],
		template : ''
			+'	<md-input-container flex>'
			+'		<label>{{taLabel}}</label>'
			+'		<md-select id="custom" aria-label="selectPicker" style="min-width:200px;max-width:200px;" ng-model="taValue" multiple>'
			+'			<md-select-header layout-align="center center">'
			+'				<div style="overflow: hidden;width:97.5%;background-color:white;position: fixed;z-index: 9999;" align="center">'
			+'					<div style="padding:10px;">'
			+'						<input ng-model="selectFilter" placeholder="&#xF002;" type="search" class="form-control input-sm fa"/>'
			+'						<div layout="row" layout-align="center center">'
			+'							<md-button class="md-raised" ng-click="click_selectAll()">Select All</md-button>'
			+'							<md-button class="md-raised" ng-click="click_deselectAll()">Deselect All</md-button>'
			+'						</div>'
			+'					</div>'
			+'				</div>'
			+'			</md-select-header>'
			+'			<div style="margin-top:97px;"></div>'
			+'			<md-option ng-value="selectedData"	ng-repeat="selectedData in taList | filter:selectFilter"">{{selectedData.name}}</md-option>'
			+'		</md-select>'
			+'	</md-input-container>'
	};
}

