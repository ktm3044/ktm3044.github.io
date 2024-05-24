(function(){"use strict";var e={5801:function(e,t,n){var r=n(5130),o=n(6768);function a(e,t){const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(n)}var i=n(1241);const s={},l=(0,i.A)(s,[["render",a]]);var u=l,c=n(1387),d=n(4232),h=n.p+"img/fnsvalue_LOGO.e2fe7047.svg";const g=e=>((0,o.Qi)("data-v-12c905bc"),e=e(),(0,o.jt)(),e),p={class:"container"},f=g((()=>(0,o.Lk)("img",{src:h,alt:"BSA 로고",class:"logo"},null,-1))),v={class:"page-title"},y={class:"header"},m={class:"header-text"},L={class:"content"},k={style:{display:"flex","justify-content":"center"}};function T(e,t,n,r,a,i){const s=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",p,[f,(0,o.Lk)("div",{class:"language-toggle",onClick:t[0]||(t[0]=(...e)=>i.toggleLanguage&&i.toggleLanguage(...e))},(0,d.v_)(i.currentLanguage),1),(0,o.Lk)("h1",v,(0,d.v_)(i.pageTitle),1),(0,o.Lk)("div",y,[(0,o.Lk)("h2",m,(0,d.v_)(i.deletionRequest),1)]),(0,o.Lk)("div",L,[(0,o.Lk)("p",null,(0,d.v_)(i.step1),1),(0,o.Lk)("ol",null,[(0,o.Lk)("li",null,(0,d.v_)(i.step1Info),1),(0,o.Lk)("li",null,(0,d.v_)(i.step2Info),1)]),(0,o.Lk)("p",null,(0,d.v_)(i.deletionInfo),1),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,(0,d.v_)(i.deletionInfo1),1),(0,o.Lk)("li",null,(0,d.v_)(i.deletionInfo2),1)]),(0,o.Lk)("p",null,(0,d.v_)(i.deletionConfirm),1),(0,o.Lk)("div",k,[(0,o.bF)(s,{to:"/otp-verification",class:"button"},{default:(0,o.k6)((()=>[(0,o.eW)((0,d.v_)(i.proceedButton),1)])),_:1})])])])}var b={data(){return{languages:["한국어","English"],currentLanguageIndex:1,texts:{"한국어":{pageTitle:"BSA",deletionRequest:"BSA 계정 삭제 요청",step1:"계정 삭제 요청을 위해 다음의 단계를 따라야합니다:",step1Info:"사용자의 가입 정보 입력 (아이디, 이메일 또는 휴대전화번호)",step2Info:"OTP 검증",deletionInfo:"삭제되는 정보는 아래와 같습니다.",deletionInfo1:"사용자 정보",deletionInfo2:"사용자의 기기 정보",deletionConfirm:"삭제 요청 이후 사용자 정보가 영구적으로 삭제되므로 복구가 불가능합니다.",proceedButton:"동의하고 진행"},English:{pageTitle:"BSA",deletionRequest:"BSA Account Delete Request",step1:"To request account deletion, follow these steps:",step1Info:"Enter user registration information (ID and email, or phone number)",step2Info:"OTP verification",deletionInfo:"The following information will be deleted. ",deletionInfo1:"User information",deletionInfo2:"User device information",deletionConfirm:"After the deletion request, user information will be permanently deleted and cannot be recovered.",proceedButton:"Agree and proceed"}}}},computed:{currentLanguage(){return this.languages[this.currentLanguageIndex]},currentTexts(){return this.texts[this.currentLanguage]},pageTitle(){return this.currentTexts.pageTitle},deletionRequest(){return this.currentTexts.deletionRequest},step1(){return this.currentTexts.step1},step1Info(){return this.currentTexts.step1Info},step2Info(){return this.currentTexts.step2Info},deletionInfo(){return this.currentTexts.deletionInfo},deletionInfo1(){return this.currentTexts.deletionInfo1},deletionInfo2(){return this.currentTexts.deletionInfo2},deletionConfirm(){return this.currentTexts.deletionConfirm},proceedButton(){return this.currentTexts.proceedButton}},methods:{toggleLanguage(){this.currentLanguageIndex=(this.currentLanguageIndex+1)%this.languages.length}}};const I=(0,i.A)(b,[["render",T],["__scopeId","data-v-12c905bc"]]);var x=I;const P=e=>((0,o.Qi)("data-v-21ce8f8b"),e=e(),(0,o.jt)(),e),O={class:"container"},_=P((()=>(0,o.Lk)("img",{src:h,alt:"BSA 로고",class:"logo"},null,-1))),C={class:"page-title"},B={class:"header"},w={class:"header-text"},A={class:"content"},M={class:"otp-verification"},E={for:"user-key"},S=["placeholder"],q={for:"verification-type"},D={value:"email"},U={value:"sms"},K={key:0},N={for:"email"},R=["placeholder"],j={key:1},V={for:"phone"},X=["placeholder"],Q={for:"country"},W={value:""},J=["value"],$={key:3,class:"error-message"},F={key:0,class:"otp-input"},G={for:"otp-code"},H=["placeholder"],Z={style:{display:"flex","justify-content":"center"}};function z(e,t,n,a,i,s){return(0,o.uX)(),(0,o.CE)("div",O,[_,(0,o.Lk)("div",{class:"language-toggle",onClick:t[0]||(t[0]=(...e)=>s.toggleLanguage&&s.toggleLanguage(...e))},(0,d.v_)(s.currentLanguage),1),(0,o.Lk)("h1",C,(0,d.v_)(s.pageTitle),1),(0,o.Lk)("div",B,[(0,o.Lk)("h2",w,(0,d.v_)(s.deletionRequest),1)]),(0,o.Lk)("div",A,[(0,o.Lk)("div",M,[(0,o.Lk)("p",null,(0,d.v_)(s.userConfirmation),1),(0,o.Lk)("div",null,[(0,o.Lk)("label",E,(0,d.v_)(s.userIdLabel),1),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>i.userKey=e),id:"user-key",placeholder:s.userIdPlaceholder},null,8,S),[[r.Jo,i.userKey]])]),(0,o.Lk)("div",null,[(0,o.Lk)("label",q,(0,d.v_)(s.otpMethodLabel),1),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>i.verificationType=e),id:"verification-type"},[(0,o.Lk)("option",D,(0,d.v_)(s.emailOption),1),(0,o.Lk)("option",U,(0,d.v_)(s.smsOption),1)],512),[[r.u1,i.verificationType]])]),"email"===i.verificationType?((0,o.uX)(),(0,o.CE)("div",K,[(0,o.Lk)("label",N,(0,d.v_)(s.emailLabel),1),(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":t[3]||(t[3]=e=>i.email=e),id:"email",placeholder:s.emailPlaceholder},null,8,R),[[r.Jo,i.email]])])):"sms"===i.verificationType?((0,o.uX)(),(0,o.CE)("div",j,[(0,o.Lk)("label",V,(0,d.v_)(s.phoneLabel),1),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>i.phoneNumber=e),id:"phone",placeholder:s.phonePlaceholder},null,8,X),[[r.Jo,i.phoneNumber]]),(0,o.Lk)("div",null,[(0,o.Lk)("label",Q,(0,d.v_)(s.countryLabel),1),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[5]||(t[5]=e=>i.selectedCountry=e),id:"country"},[(0,o.Lk)("option",W,(0,d.v_)(s.selectCountry),1),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.countries,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.code,value:e.code},(0,d.v_)(e.name),9,J)))),128))],512),[[r.u1,i.selectedCountry]])])])):(0,o.Q3)("",!0),(0,o.Lk)("button",{onClick:t[6]||(t[6]=(...e)=>s.verifyUser&&s.verifyUser(...e))},(0,d.v_)(s.verifyUserButton),1),i.showVerifyButton?((0,o.uX)(),(0,o.CE)("button",{key:2,class:"sendOTP-button",onClick:t[7]||(t[7]=(...e)=>s.sendOTP&&s.sendOTP(...e))},(0,d.v_)(s.sendOTPButton),1)):(0,o.Q3)("",!0),i.showErrorMessage?((0,o.uX)(),(0,o.CE)("p",$,(0,d.v_)(s.errorMessage),1)):(0,o.Q3)("",!0)])]),i.showOTPInput?((0,o.uX)(),(0,o.CE)("div",F,[(0,o.Lk)("label",G,(0,d.v_)(s.otpInputLabel),1),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=e=>i.authNum=e),id:"otp-code",placeholder:s.otpInputPlaceholder},null,8,H),[[r.Jo,i.authNum]]),(0,o.Lk)("button",{onClick:t[9]||(t[9]=(...e)=>s.verifyOTPCode&&s.verifyOTPCode(...e))},(0,d.v_)(s.verifyOTPButton),1)])):(0,o.Q3)("",!0),(0,o.Lk)("div",Z,[i.isNextButtonEnabled?((0,o.uX)(),(0,o.CE)("button",{key:0,class:"button",onClick:t[10]||(t[10]=(...e)=>s.navigateToNextPage&&s.navigateToNextPage(...e))},(0,d.v_)(s.nextButton),1)):(0,o.Q3)("",!0)])])}n(4114);var Y=n(8355),ee={data(){return{languages:["한국어","English"],currentLanguageIndex:1,translation:{pageTitle:["BSA","BSA"],deletionRequest:["BSA 계정 삭제 요청","BSA Account Delete Request"],userConfirmation:["사용자 확인을 위해 다음의 정보를 입력해주세요.","Please enter the following information for user confirmation."],userIdLabel:["사용자 아이디","User ID"],userIdPlaceholder:["아이디를 입력해 주세요","Please enter your ID"],otpMethodLabel:["OTP 인증 방법 선택","Send OTP to"],emailOption:["이메일","Email"],smsOption:["SMS","SMS"],emailLabel:["Email","Email"],emailPlaceholder:["이메일을 입력해 주세요","Please enter your email"],phoneLabel:["전화번호","Phone number"],phonePlaceholder:["전화번호를 입력해주세요","Please enter your phone number"],countryLabel:["국가","Country"],selectCountry:["국가를 선택해주세요","Please select your country"],verifyUserButton:["사용자 정보 확인","Verify user information"],sendOTPButton:["OTP 발송","Send OTP"],errorMessage:["오류가 발생했습니다. 다시 시도해주세요.","An error occurred. Please try again."],otpInputLabel:["OTP 코드","OTP code"],otpInputPlaceholder:["OTP 코드를 입력해주세요","Please enter your OTP code"],verifyOTPButton:["OTP 확인","Verify OTP"],nextButton:["다음","Next"]},verificationType:"email",email:"",phoneNumber:"",userKey:"",verifyType:"",verifyData:"",showVerifyButton:!1,showErrorMessage:!1,clientKey:"1daec78593a643e6b53ce9803ded5916",countries:[{code:"82",name:"Korea (+82)"},{code:"60",name:"Malaysia (+60)"},{code:"62",name:"Indonesia (+62)"},{code:"65",name:"Singapore (+65)"},{code:"1",name:"USA (+1)"},{code:"64",name:"NewZealand (+64)"}],selectedCountry:"",showOTPInput:!1,authNum:"",disposeToken:"",isNextButtonEnabled:!1,seq:""}},watch:{verificationType(e){this.showVerifyButton=!1,this.showOTPInput=!1}},computed:{currentLanguage(){return this.languages[this.currentLanguageIndex]},pageTitle(){return this.translation.pageTitle[this.currentLanguageIndex]},deletionRequest(){return this.translation.deletionRequest[this.currentLanguageIndex]},userConfirmation(){return this.translation.userConfirmation[this.currentLanguageIndex]},userIdLabel(){return this.translation.userIdLabel[this.currentLanguageIndex]},userIdPlaceholder(){return this.translation.userIdPlaceholder[this.currentLanguageIndex]},otpMethodLabel(){return this.translation.otpMethodLabel[this.currentLanguageIndex]},emailOption(){return this.translation.emailOption[this.currentLanguageIndex]},smsOption(){return this.translation.smsOption[this.currentLanguageIndex]},emailLabel(){return this.translation.emailLabel[this.currentLanguageIndex]},emailPlaceholder(){return this.translation.emailPlaceholder[this.currentLanguageIndex]},phoneLabel(){return this.translation.phoneLabel[this.currentLanguageIndex]},phonePlaceholder(){return this.translation.phonePlaceholder[this.currentLanguageIndex]},countryLabel(){return this.translation.countryLabel[this.currentLanguageIndex]},selectCountry(){return this.translation.selectCountry[this.currentLanguageIndex]},verifyUserButton(){return this.translation.verifyUserButton[this.currentLanguageIndex]},sendOTPButton(){return this.translation.sendOTPButton[this.currentLanguageIndex]},errorMessage(){return this.translation.errorMessage[this.currentLanguageIndex]},otpInputLabel(){return this.translation.otpInputLabel[this.currentLanguageIndex]},otpInputPlaceholder(){return this.translation.otpInputPlaceholder[this.currentLanguageIndex]},verifyOTPButton(){return this.translation.verifyOTPButton[this.currentLanguageIndex]},nextButton(){return this.translation.nextButton[this.currentLanguageIndex]}},methods:{toggleLanguage(){this.currentLanguageIndex=(this.currentLanguageIndex+1)%this.languages.length},navigateToNextPage(){this.$router.push({path:"/account-deletion",query:{userKey:this.userKey,disposeToken:this.disposeToken}})},async verifyUser(){if(this.verifyType="email"===this.verificationType?"CMMDUP001":"CMMDUP002","email"===this.verificationType)this.verifyData=this.email;else if("sms"===this.verificationType){const e=this.phoneNumber.slice(1);this.verifyData=this.selectedCountry+e}if(!this.userKey)return this.showErrorMessage=!0,void(this.errorMessage="Please enter your user key.");const e=`https://api.onebsa.com.my/api/v3/user/exists?userKey=${this.userKey}&verifyType=${this.verifyType}&verifyData=${this.verifyData}`;try{const t=await Y.A.get(e);console.log("API response:",t.data),0===t.data.rtCode?(this.showVerifyButton=!0,this.showErrorMessage=!1):(this.showVerifyButton=!1,this.showErrorMessage=!0,this.errorMessage="Please verify your user information.")}catch(t){console.error("There was a problem with the fetch operation:",t.message),this.showErrorMessage=!0,this.errorMessage="There was a problem verifying your information. Please try again later."}},sendOTP(){const e="CMMDUP001"===this.verifyType?"https://api.onebsa.com.my/api/v3/mail":"https://api.onebsa.com.my/api/v3/sms",t={clientKey:this.clientKey,email:this.email};"CMMDUP002"===this.verifyType&&(t.phoneNum=this.verifyData),Y.A.post(e,t).then((e=>{console.log("OTP sent successfully:",e.data),this.seq=e.data.data.seq,console.log("seq:",this.seq),this.showOTPInput=!0})).catch((e=>{console.error("Error sending OTP:",e)}))},async verifyOTPCode(){const e={clientKey:this.clientKey,authNum:this.authNum,seq:this.seq};"sms"===this.verificationType?e.phoneNum=this.verifyData:"email"===this.verificationType&&(e.email=this.verifyData);const t="sms"===this.verificationType?"https://api.onebsa.com.my/api/v3/sms/verify":"https://api.onebsa.com.my/api/v3/mail/verify";try{const n=await Y.A.post(t,e);this.disposeToken=n.data.data.disposeToken,console.log("disposeToken:",this.disposeToken),0===n.data.rtCode?this.isNextButtonEnabled=!0:console.error("Error verifying OTP:",n.data.rtMsg)}catch(n){console.error("Error verifying OTP:",n)}}}};const te=(0,i.A)(ee,[["render",z],["__scopeId","data-v-21ce8f8b"]]);var ne=te;const re=[{path:"/",name:"HomePage",component:x},{path:"/otp-verification",name:"OTPVerification",component:ne},{path:"/account-deletion",name:"AccountDeletion",component:xe}],oe=(0,c.aE)({history:(0,c.LA)(),routes:re});var ae=oe,ie=n(144);const se=e=>((0,o.Qi)("data-v-4ff5620b"),e=e(),(0,o.jt)(),e),le={class:"container"},ue=se((()=>(0,o.Lk)("img",{src:h,alt:"BSA 로고",class:"logo"},null,-1))),ce={class:"page-title"},de={class:"header"},he={class:"header-text"},ge={class:"content"},pe={style:{display:"flex","justify-content":"center"}},fe={style:{display:"flex","justify-content":"center"}},ve=se((()=>(0,o.Lk)("br",null,null,-1))),ye=se((()=>(0,o.Lk)("br",null,null,-1))),me={style:{display:"flex","justify-content":"center"}},Le={key:0,class:"success-message"},ke={key:1,class:"error-message"},Te={data(){return{languages:["한국어","English"],currentLanguageIndex:1,translation:{pageTitle:["BSA","BSA"],deletionRequest:["BSA 계정 삭제 요청","BSA Account Delete Request"],deletionProcess:["BSA 계정 삭제를 진행합니다.","We are proceeding with the deletion of your BSA account."],informationCheck:["아래의 안내 사항을 확인해주세요","Please check the information below."],info1:["삭제 요청 시 즉시 사용자의 정보가 영구적으로 삭제되므로 복구하실 수 없습니다.","Once the deletion request is submitted, your information will be permanently removed and cannot be recovered."],info2:["삭제 후 BSA 앱을 다시 이용하시려면 재가입이 필요합니다.","If you wish to use the BSA app again after deletion, you will need to re-register."],info3:["정말로 삭제하시겠습니까?","Are you sure you want to delete it?"],deleteButton:["삭제","Delete"],successMessage:["삭제가 완료되었습니다.","The deletion has been completed."],errorMessage:["삭제 중 오류가 발생했습니다.","An error occurred during the deletion process."]}}},computed:{currentLanguage(){return this.languages[this.currentLanguageIndex]},pageTitle(){return this.translation.pageTitle[this.currentLanguageIndex]},deletionRequest(){return this.translation.deletionRequest[this.currentLanguageIndex]},deletionProcess(){return this.translation.deletionProcess[this.currentLanguageIndex]},informationCheck(){return this.translation.informationCheck[this.currentLanguageIndex]},info1(){return this.translation.info1[this.currentLanguageIndex]},info2(){return this.translation.info2[this.currentLanguageIndex]},info3(){return this.translation.info3[this.currentLanguageIndex]},deleteButton(){return this.translation.deleteButton[this.currentLanguageIndex]},successMessage(){return this.translation.successMessage[this.currentLanguageIndex]},errorMessage(){return this.translation.errorMessage[this.currentLanguageIndex]}},methods:{toggleLanguage(){this.currentLanguageIndex=(this.currentLanguageIndex+1)%this.languages.length}}};var be=Object.assign(Te,{__name:"AccountDeletion",setup(e){const t=(0,ie.KR)(!1),n=(0,ie.KR)(!1),r=(0,c.lq)(),{userKey:a,disposeToken:i}=r.query,s=async()=>{try{console.log("userKey:",a),console.log("disposeToken:",i);const e=await Y.A.delete("https://api.onebsa.com.my/api/v3/user",{data:{userKey:a,disposeToken:i}});console.log("Response:",e.data.rtCode);let r=e.data.rtCode;0===r?(n.value=!0,setTimeout((()=>{ae.push("/").then((()=>{window.location.reload()}))}),2e3)):t.value=!0}catch(e){console.error("Error deleting account:",e),t.value=!0}};return(e,r)=>((0,o.uX)(),(0,o.CE)("div",le,[ue,(0,o.Lk)("div",{class:"language-toggle",onClick:r[0]||(r[0]=(...t)=>e.toggleLanguage&&e.toggleLanguage(...t))},(0,d.v_)(e.currentLanguage),1),(0,o.Lk)("h1",ce,(0,d.v_)(e.pageTitle),1),(0,o.Lk)("div",de,[(0,o.Lk)("h2",he,(0,d.v_)(e.deletionRequest),1)]),(0,o.Lk)("div",ge,[(0,o.Lk)("div",pe,[(0,o.Lk)("div",null,(0,d.v_)(e.deletionProcess),1)]),(0,o.Lk)("div",fe,[(0,o.Lk)("div",null,[(0,o.Lk)("p",null,(0,d.v_)(e.informationCheck),1)])]),(0,o.Lk)("p",null,[(0,o.eW)((0,d.v_)(e.info1)+" ",1),ve,(0,o.eW)((0,d.v_)(e.info2),1),ye,(0,o.eW)(" "+(0,d.v_)(e.info3),1)]),(0,o.Lk)("div",me,[(0,o.Lk)("button",{onClick:s,class:"button"},(0,d.v_)(e.deleteButton),1)]),n.value?((0,o.uX)(),(0,o.CE)("div",Le,(0,d.v_)(e.successMessage),1)):(0,o.Q3)("",!0),t.value?((0,o.uX)(),(0,o.CE)("div",ke,(0,d.v_)(e.errorMessage),1)):(0,o.Q3)("",!0)])]))}});const Ie=(0,i.A)(be,[["__scopeId","data-v-4ff5620b"]]);var xe=Ie;const Pe=(0,c.aE)({history:(0,c.LA)(),routes:[{path:"/",component:x},{path:"/otp-verification",component:ne},{path:"/account-deletion",component:xe}]});(0,r.Ef)(u).use(Pe).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],l=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkaccount_deletion_page"]=self["webpackChunkaccount_deletion_page"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(5801)}));r=n.O(r)})();
//# sourceMappingURL=app.c01dd502.js.map