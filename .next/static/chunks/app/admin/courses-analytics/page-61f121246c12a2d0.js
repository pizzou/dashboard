(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{8459:function(e,t,s){Promise.resolve().then(s.bind(s,79796))},79796:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var n=s(57437);s(2265);var i=s(98350),r=s(84762),a=s(35048),l=s(27066),c=s(63797),o=s(24235),d=s(50039),u=s(39677),x=(0,l.z)({chartName:"BarChart",GraphicalChild:c.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:o.K},{axisType:"yAxis",AxisComp:d.B}],formatAxisMap:u.t9}),h=s(33343),p=s(561),f=s(87585),m=s(91950),j=s(34095),y=e=>{let{data:t,isLoading:s}=(0,m.r6)({}),i=[];return t&&t.courses.last12Months.forEach(e=>{i.push({name:e.month,uv:e.count})}),(0,n.jsx)(n.Fragment,{children:s?(0,n.jsx)(f.Z,{}):(0,n.jsxs)("div",{className:"h-screen",children:[(0,n.jsxs)("div",{className:"mt-[50px]",children:[(0,n.jsx)("h1",{className:"".concat(j.W.title," px-5 !text-start"),children:"Courses Analytics"}),(0,n.jsxs)("p",{className:"".concat(j.W.label," px-5"),children:["Last 12 months analytics data"," "]})]}),(0,n.jsx)("div",{className:"w-full h-[90%] flex items-center justify-center",children:(0,n.jsx)(a.h,{width:"90%",height:"50%",children:(0,n.jsxs)(x,{width:150,height:300,data:i,children:[(0,n.jsx)(o.K,{dataKey:"name",children:(0,n.jsx)(h._,{offset:0,position:"insideBottom"})}),(0,n.jsx)(d.B,{domain:[0,"auto"]}),(0,n.jsx)(c.$,{dataKey:"uv",fill:"#3faf82",children:(0,n.jsx)(p.e,{dataKey:"uv",position:"top"})})]})})})]})})},v=s(87263),g=e=>(0,n.jsxs)("div",{children:[(0,n.jsx)(r.Z,{title:"Elearning - Admin",description:"ELearning is a platform for students to learn and get help from teachers",keywords:"Prograaming,MERN,Redux,Machine Learning"}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"1500px:w-[16%] w-1/5",children:(0,n.jsx)(i.Z,{})}),(0,n.jsxs)("div",{className:"w-[85%]",children:[(0,n.jsx)(v.Z,{}),(0,n.jsx)(y,{})]})]})]})},87585:function(e,t,s){"use strict";var n=s(57437);s(2265),s(1622),t.Z=()=>(0,n.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,n.jsx)("div",{className:"loader"})})},34095:function(e,t,s){"use strict";s.d(t,{W:function(){return n}});let n={title:"text-[25px] text-black dark:text-white font-[500] font-Poppins text-center py-2",label:"text-[16px] font-Poppins text-black dark:text-white",input:"w-full text-black dark:text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins",button:"flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[45px] w-full text-[16px] font-Poppins font-semibold"}},91950:function(e,t,s){"use strict";s.d(t,{U_:function(){return l},eN:function(){return a},r6:function(){return r}});var n=s(10273);let i=n.gk.injectEndpoints({endpoints:e=>({getCoursesAnalytics:e.query({query:()=>({url:"get-courses-analytics",method:"GET",credentials:"include"})}),getUsersAnalytics:e.query({query:()=>({url:"get-users-analytics",method:"GET",credentials:"include"})}),getOrdersAnalytics:e.query({query:()=>({url:"get-orders-analytics",method:"GET",credentials:"include"})})})}),{useGetCoursesAnalyticsQuery:r,useGetUsersAnalyticsQuery:a,useGetOrdersAnalyticsQuery:l}=i},1622:function(){}},function(e){e.O(0,[115,400,805,215,702,724,170,61,971,596,744],function(){return e(e.s=8459)}),_N_E=e.O()}]);