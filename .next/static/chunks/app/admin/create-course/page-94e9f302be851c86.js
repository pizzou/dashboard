(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[660],{13660:function(e,t,s){Promise.resolve().then(s.bind(s,90587))},90587:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var i=s(57437),a=s(2265),n=s(98350),r=s(84762),c=s(3583),l=s(37098),o=s(66443),d=s(24619),u=s(51539),m=s(22626),v=s(5925),h=s(24033),g=e=>{let[t,{isLoading:s,isSuccess:n,error:r}]=(0,m._c)();(0,a.useEffect)(()=>{n&&(v.toast.success("Course created successfully"),(0,h.redirect)("/admin/courses")),r&&"data"in r&&v.toast.error(r.data.message)},[n,r]);let[g,p]=(0,a.useState)(0),[f,x]=(0,a.useState)({name:"",description:"",price:"",estimatedPrice:"",tags:"",level:"",categories:"",demoUrl:"",thumbnail:""}),[j,S]=(0,a.useState)([{title:""}]),[w,N]=(0,a.useState)([{title:""}]),[b,C]=(0,a.useState)([{videoUrl:"",title:"",description:"",videoSection:"Untitled Section",videoLength:"",links:[{title:"",url:""}],suggestion:""}]),[k,Z]=(0,a.useState)({}),E=async()=>{let e=j.map(e=>({title:e.title})),t=w.map(e=>({title:e.title})),s=b.map(e=>({videoUrl:e.videoUrl,title:e.title,description:e.description,videoLength:e.videoLength,videoSection:e.videoSection,links:e.links.map(e=>({title:e.title,url:e.url})),suggestion:e.suggestion})),i={name:f.name,description:f.description,categories:f.categories,price:f.price,estimatedPrice:f.estimatedPrice,tags:f.tags,thumbnail:f.thumbnail,level:f.level,demoUrl:f.demoUrl,totalVideos:b.length,benefits:e,prerequisites:t,courseData:s};Z(i)},U=async e=>{s||await t(k)};return(0,i.jsxs)("div",{className:"w-full flex min-h-screen",children:[(0,i.jsxs)("div",{className:"w-[80%]",children:[0===g&&(0,i.jsx)(c.Z,{courseInfo:f,setCourseInfo:x,active:g,setActive:p}),1===g&&(0,i.jsx)(o.Z,{benefits:j,setBenefits:S,prerequisites:w,setPrerequisites:N,active:g,setActive:p}),2===g&&(0,i.jsx)(d.Z,{active:g,setActive:p,courseContentData:b,setCourseContentData:C,handleSubmit:E}),3===g&&(0,i.jsx)(u.Z,{active:g,setActive:p,courseData:k,handleCourseCreate:U})]}),(0,i.jsx)("div",{className:"w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0",children:(0,i.jsx)(l.Z,{active:g,setActive:p})})]})},p=s(87263),f=e=>(0,i.jsxs)("div",{children:[(0,i.jsx)(r.Z,{title:"Elearning - Admin",description:"ELearning is a platform for students to learn and get help from teachers",keywords:"Prograaming,MERN,Redux,Machine Learning"}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("div",{className:"1500px:w-[16%] w-1/5",children:(0,i.jsx)(n.Z,{})}),(0,i.jsxs)("div",{className:"w-[85%]",children:[(0,i.jsx)(p.Z,{}),(0,i.jsx)(g,{})]})]})]})}},function(e){e.O(0,[115,400,805,712,582,447,190,215,702,724,930,61,566,971,596,744],function(){return e(e.s=13660)}),_N_E=e.O()}]);