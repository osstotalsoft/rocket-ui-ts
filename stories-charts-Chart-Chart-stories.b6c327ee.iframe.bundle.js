"use strict";(self.webpackChunk_totalsoft_rocket_ui=self.webpackChunk_totalsoft_rocket_ui||[]).push([[164],{"./.yarn/__virtual__/@mui-icons-material-virtual-e201b9706e/4/.yarn/berry/cache/@mui-icons-material-npm-5.16.7-3ba3ef0f30-10c0.zip/node_modules/@mui/icons-material/BarChart.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("../../../.yarn/berry/cache/@babel-runtime-npm-7.24.7-035e043b00-10c0.zip/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.A=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./.yarn/__virtual__/@mui-icons-material-virtual-e201b9706e/4/.yarn/berry/cache/@mui-icons-material-npm-5.16.7-3ba3ef0f30-10c0.zip/node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("../../../.yarn/berry/cache/react-npm-18.3.1-af38f3c1ae-10c0.zip/node_modules/react/jsx-runtime.js");exports.A=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"}),"BarChart")},"./.yarn/__virtual__/@mui-icons-material-virtual-e201b9706e/4/.yarn/berry/cache/@mui-icons-material-npm-5.16.7-3ba3ef0f30-10c0.zip/node_modules/@mui/icons-material/RadioButtonUnchecked.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("../../../.yarn/berry/cache/@babel-runtime-npm-7.24.7-035e043b00-10c0.zip/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.A=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./.yarn/__virtual__/@mui-icons-material-virtual-e201b9706e/4/.yarn/berry/cache/@mui-icons-material-npm-5.16.7-3ba3ef0f30-10c0.zip/node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("../../../.yarn/berry/cache/react-npm-18.3.1-af38f3c1ae-10c0.zip/node_modules/react/jsx-runtime.js");exports.A=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"RadioButtonUnchecked")},"./.yarn/__virtual__/@mui-icons-material-virtual-e201b9706e/4/.yarn/berry/cache/@mui-icons-material-npm-5.16.7-3ba3ef0f30-10c0.zip/node_modules/@mui/icons-material/ShowChart.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("../../../.yarn/berry/cache/@babel-runtime-npm-7.24.7-035e043b00-10c0.zip/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.A=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./.yarn/__virtual__/@mui-icons-material-virtual-e201b9706e/4/.yarn/berry/cache/@mui-icons-material-npm-5.16.7-3ba3ef0f30-10c0.zip/node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("../../../.yarn/berry/cache/react-npm-18.3.1-af38f3c1ae-10c0.zip/node_modules/react/jsx-runtime.js");exports.A=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"m3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"}),"ShowChart")},"./src/stories/charts/Chart/Chart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bar:()=>Bar,Doughnut:()=>Doughnut,Line:()=>Line,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Chart_stories});var ShowChart=__webpack_require__("./.yarn/__virtual__/@mui-icons-material-virtual-e201b9706e/4/.yarn/berry/cache/@mui-icons-material-npm-5.16.7-3ba3ef0f30-10c0.zip/node_modules/@mui/icons-material/ShowChart.js"),BarChart=__webpack_require__("./.yarn/__virtual__/@mui-icons-material-virtual-e201b9706e/4/.yarn/berry/cache/@mui-icons-material-npm-5.16.7-3ba3ef0f30-10c0.zip/node_modules/@mui/icons-material/BarChart.js"),RadioButtonUnchecked=__webpack_require__("./.yarn/__virtual__/@mui-icons-material-virtual-e201b9706e/4/.yarn/berry/cache/@mui-icons-material-npm-5.16.7-3ba3ef0f30-10c0.zip/node_modules/@mui/icons-material/RadioButtonUnchecked.js"),components=__webpack_require__("./src/components/index.ts");const chartOptions={maintainAspectRatio:!1,barPercentage:.2,plugins:{title:{display:!1,text:""},legend:{position:"bottom"}},layout:{padding:{left:0,right:20,top:20,bottom:0}},scales:{x:{offset:!1,grid:{display:!0,borderDash:[1,5],zeroLineColor:"rgb(255,255,255)",drawBorder:!1,zeroLineWidth:0},scaleLabel:{display:!1,labelString:""},ticks:{autoSkip:!1}},y:{grid:{display:!0,borderDash:[1,5],zeroLineColor:"rgb(255,255,255)",drawBorder:!1,zeroLineBorderDash:[1,5]},scaleLabel:{display:!1,labelString:""}}}},barLineLabels=["January","February","March","April","May","June","July"],lineChartData={labels:barLineLabels,datasets:[{data:barLineLabels.map((()=>Math.floor(101*Math.random()))),label:"Line",borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"},{data:barLineLabels.map((()=>Math.floor(101*Math.random()))),label:"Line2",borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]},barChartData={labels:barLineLabels,datasets:[{data:barLineLabels.map((()=>Math.floor(101*Math.random()))),label:"Dataset 1",borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"},{data:barLineLabels.map((()=>Math.floor(101*Math.random()))),label:"Dataset 2",borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]},doughnutLabels=["Dataset1","Dataset 2"],doughnutChartData={labels:doughnutLabels,datasets:[{data:doughnutLabels.map((()=>Math.floor(101*Math.random()))),borderColor:["rgb(255, 99, 132)","rgb(53, 162, 235)"],backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(53, 162, 235, 0.5)"]}]},Chart_stories={title:"Components/Charts/Chart",component:components.t1,args:{width:500,height:200}},Line={args:{title:"Line chart",subheader:"Chart infos",Icon:ShowChart.A,iconColor:"info",data:lineChartData,options:{...chartOptions,plugins:{...chartOptions.plugins,legend:{...chartOptions.plugins.legend,display:!1}}}},parameters:{docs:{source:{code:"\n        <Chart\n          title='Line chart'\n          subheader={'Chart infos'}\n          type='line'\n          Icon={InsertChart}\n          iconColor='info'\n          data={lineChartData}\n          options={chartOptions}\n        />\n        ",format:!0}}}},Bar={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:"\n            <Chart\n              title='Bar chart'\n              subheader={'Chart infos'}\n              type='bar'\n              Icon={BarChart}\n              iconColor='info'\n              data={barChartData}\n              options={chartOptions}\n            />\n            ",format:!0}}},args:{title:"Bar chart",subheader:"Chart infos",type:"bar",Icon:BarChart.A,iconColor:"info",data:barChartData,options:chartOptions}},Doughnut={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:"\n            <Chart\n              title='Doughnut chart'\n              subheader={'Chart infos'}\n              type='doughnut'\n              Icon={RadioButtonUnchecked}\n              iconColor='info'\n              data={barChartData}\n              options={chartOptions}\n            />\n            ",format:!0}}},args:{title:"Doughnut chart",subheader:"Chart infos",type:"doughnut",Icon:RadioButtonUnchecked.A,iconColor:"info",data:doughnutChartData,options:chartOptions}},__namedExportsOrder=["Line","Bar","Doughnut"];Line.parameters={...Line.parameters,docs:{...Line.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Line chart',\n    subheader: 'Chart infos',\n    Icon: ShowChart,\n    iconColor: 'info',\n    data: lineChartData,\n    options: {\n      ...chartOptions,\n      plugins: {\n        ...chartOptions.plugins,\n        legend: {\n          ...chartOptions.plugins.legend,\n          display: false\n        }\n      }\n    }\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `\n        <Chart\n          title='Line chart'\n          subheader={'Chart infos'}\n          type='line'\n          Icon={InsertChart}\n          iconColor='info'\n          data={lineChartData}\n          options={chartOptions}\n        />\n        `,\n        format: true\n      }\n    }\n  }\n}",...Line.parameters?.docs?.source},description:{story:"Default type is set to `line`.",...Line.parameters?.docs?.description}}},Bar.parameters={...Bar.parameters,docs:{...Bar.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: `\n            <Chart\n              title='Bar chart'\n              subheader={'Chart infos'}\n              type='bar'\n              Icon={BarChart}\n              iconColor='info'\n              data={barChartData}\n              options={chartOptions}\n            />\n            `,\n        format: true\n      }\n    }\n  },\n  args: {\n    title: 'Bar chart',\n    subheader: 'Chart infos',\n    type: 'bar',\n    Icon: BarChart,\n    iconColor: 'info',\n    data: barChartData,\n    options: chartOptions\n  }\n}",...Bar.parameters?.docs?.source},description:{story:"You can show the `legend` by providing it to the `options` prop. It will use the `label` text to display it.",...Bar.parameters?.docs?.description}}},Doughnut.parameters={...Doughnut.parameters,docs:{...Doughnut.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: `\n            <Chart\n              title='Doughnut chart'\n              subheader={'Chart infos'}\n              type='doughnut'\n              Icon={RadioButtonUnchecked}\n              iconColor='info'\n              data={barChartData}\n              options={chartOptions}\n            />\n            `,\n        format: true\n      }\n    }\n  },\n  args: {\n    title: 'Doughnut chart',\n    subheader: 'Chart infos',\n    type: 'doughnut',\n    Icon: RadioButtonUnchecked,\n    iconColor: 'info',\n    data: doughnutChartData,\n    options: chartOptions\n  }\n}",...Doughnut.parameters?.docs?.source},description:{story:"Doughnut chart",...Doughnut.parameters?.docs?.description}}}}}]);