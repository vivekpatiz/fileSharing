(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+jrR":function(t,e,i){"use strict";i("zMhT");var n=i("nn1f");i.d(e,"a",function(){return n.a})},JqQ5:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n=function(){function t(){}return t.prototype.blockPaste=function(t){t.preventDefault()},t.prototype.blockCopy=function(t){t.preventDefault()},t.prototype.blockCut=function(t){t.preventDefault()},t}()},ayJE:function(t,e,i){"use strict";var n=i("CcnG"),o=function(){this.metaData=new function(){}};i.d(e,"a",function(){return a});var a=function(){function t(){this.passPasswordPolicy=new n.EventEmitter,this.policyPopUp=new n.EventEmitter,this.options=new o}return t.prototype.ngOnChanges=function(t){var e=t.options.currentValue.pwd,i=t.options.currentValue.target;if(this.pwd=e,e){for(var n=t.options.currentValue.metaData.minimumCharsLength,o=t.options.currentValue.metaData.maxCharsLength,a=0;a<this.options.pwdPolicyItems.length;a++)if("minChar"==this.options.pwdPolicyItems[a].id)this.options.pwdPolicyItems[a].icon=e.length>=n,e.length>=n?this.applySuccessTick(a):this.applyErrorTick(a);else if("maxChar"==this.options.pwdPolicyItems[a].id)this.options.pwdPolicyItems[a].icon=e.length<=o,e.length<=o?this.applySuccessTick(a):this.applyErrorTick(a);else if("lCase"==this.options.pwdPolicyItems[a].id)this.options.pwdPolicyItems[a].icon=!!/[a-z]/.test(e),/[a-z]/.test(e)?this.applySuccessTick(a):this.applyErrorTick(a);else if("uCase"==this.options.pwdPolicyItems[a].id)this.options.pwdPolicyItems[a].icon=!!/[A-Z]/.test(e),/[A-Z]/.test(e)?this.applySuccessTick(a):this.applyErrorTick(a);else if("numbers"==this.options.pwdPolicyItems[a].id)this.options.pwdPolicyItems[a].icon=null!=e.match(/\d+/g),null!=e.match(/\d+/g)?this.applySuccessTick(a):this.applyErrorTick(a);else if("specialChar"==this.options.pwdPolicyItems[a].id){var s=t.options.currentValue.metaData.excludeSpecialCharsList,r=/\s+/g;this.options.pwdPolicyItems[a].icon=!(!(l=t.options.currentValue.metaData.includeSpecialCharsList).test(e)||null!=e.match(r)||s.test(e)),!l.test(e)||null!=e.match(r)||s.test(e)?this.applyErrorTick(a):this.applySuccessTick(a)}else if("space"==this.options.pwdPolicyItems[a].id){var l;s=t.options.currentValue.metaData.excludeSpecialCharsList,this.options.pwdPolicyItems[a].icon=!(l=t.options.currentValue.metaData.includeSpecialCharsList).test(e)&&!s.test(e),this.options.pwdPolicyItems[a].icon?this.applySuccessTick(a):this.applyErrorTick(a)}console.log(this.options);var p=this.passPasswordPolicyCriteria(this.options,i);this.passPasswordPolicy.emit(p)}},t.prototype.applySuccessTick=function(t){for(var e=document.getElementById(this.options.metaData.id),i=0;i<e.children.length;i++){var n=e.children[i].getElementsByTagName("span");n[0].classList[0]===this.options.pwdPolicyItems[t].id&&n[0].classList.remove("icon-error-tick-small"),n[0].classList[0]===this.options.pwdPolicyItems[t].id&&n[0].classList.add("icon-success-tick-small")}},t.prototype.applyErrorTick=function(t){for(var e=document.getElementById(this.options.metaData.id),i=0;i<e.children.length;i++){var n=e.children[i].getElementsByTagName("span");n[0].classList[0]===this.options.pwdPolicyItems[t].id&&n[0].classList.remove("icon-success-tick-small"),n[0].classList[0]===this.options.pwdPolicyItems[t].id&&n[0].classList.add("icon-error-tick-small")}},t.prototype.doMaxCharCheck=function(){},t.prototype.passPasswordPolicyCriteria=function(t,e){for(var i={},n=0;n<this.options.pwdPolicyItems.length;n++){if(!1===this.options.pwdPolicyItems[n].icon){i.status=!1,i.target=e;break}i.status=!0,i.target=e}return i},t.prototype.togglePwdPolicyInfoPopUp=function(){this.options.metaData.showPwdPolicyInfoPopupOnLoad=!this.options.metaData.showPwdPolicyInfoPopupOnLoad,this.policyPopUp.emit(this.options.metaData.id)},t.prototype.hidePwdPolicyInfoPopUp=function(){this.options.metaData.showPwdPolicyInfoPopupOnLoad=!1},t}()},k1vH:function(t,e,i){"use strict";var n=i("CcnG"),o=i("Ip0R");i("ayJE"),i.d(e,"a",function(){return a}),i.d(e,"b",function(){return r});var a=n["\u0275crt"]({encapsulation:2,styles:[[".icon-pwd-help{position:absolute;right:-28px;top:7px}.password-policy-wrap{padding:20px;position:absolute;top:-93px;right:-420px;border-radius:5px;width:380px}.widescreen-default .password-policy-wrap{background:#fff;border:1px solid #d5d9df}.light .password-policy-wrap{border:1px solid}.password-policy-wrap .title{padding-bottom:20px;font-weight:700}.password-policy-wrap .policy-items .policy-item{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;padding-bottom:10px}.password-policy-wrap::before{content:'';position:absolute;left:-2%;top:102px;height:12px;width:12px;-webkit-transform:rotate(315deg);transform:rotate(315deg)}.widescreen-default .password-policy-wrap::before{background-color:#fff;border-left:1px solid #d5d9df;border-top:1px solid #d5d9df}.light .password-policy-wrap::before{border-left:1px solid;border-top:1px solid}"]],data:{}});function s(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,5,"div",[["class","policy-item"]],null,null,null,null,null)),(t()(),n["\u0275eld"](1,0,null,null,1,"div",[["class","label"]],null,null,null,null,null)),(t()(),n["\u0275ted"](2,null,[" "," "])),(t()(),n["\u0275eld"](3,0,null,null,2,"div",[["class","dynamic-icon"]],null,null,null,null,null)),(t()(),n["\u0275eld"](4,0,null,null,1,"span",[],null,null,null,null,null)),n["\u0275did"](5,278528,null,0,o.k,[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(t,e){t(e,5,0,n["\u0275inlineInterpolate"](1,"",e.context.$implicit.id," "),"maxChar"==e.context.$implicit.id||"space"==e.context.$implicit.id?"icon-success-tick-small":"icon-error-tick-small")},function(t,e){t(e,2,0,e.context.$implicit.label)})}function r(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,0,"span",[["class","icon-pwd-help icon-info"]],null,[[null,"click"]],function(t,e,i){var n=!0;return"click"===e&&(n=!1!==t.component.togglePwdPolicyInfoPopUp()&&n),n},null,null)),(t()(),n["\u0275eld"](1,0,null,null,6,"div",[["class","password-policy-wrap"]],[[8,"hidden",0]],null,null,null,null)),(t()(),n["\u0275eld"](2,0,null,null,2,"div",[["class","title"]],null,null,null,null,null)),(t()(),n["\u0275eld"](3,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),n["\u0275ted"](4,null,["",""])),(t()(),n["\u0275eld"](5,0,null,null,2,"div",[["class","policy-items"]],[[8,"id",0]],null,null,null,null)),(t()(),n["\u0275and"](16777216,null,null,1,null,s)),n["\u0275did"](7,278528,null,0,o.l,[n.ViewContainerRef,n.TemplateRef,n.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(t,e){t(e,7,0,e.component.options.pwdPolicyItems)},function(t,e){var i=e.component;t(e,1,0,!i.options.metaData.showPwdPolicyInfoPopupOnLoad),t(e,4,0,i.options.metaData.title),t(e,5,0,n["\u0275inlineInterpolate"](1,"",i.options.metaData.id,""))})}},nn1f:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n=function(){this.enableNumberPad=!1,this.positioningVKB=!1}},sf89:function(t,e,i){"use strict";var n=i("CcnG");i("zMhT"),i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a});var o=n["\u0275crt"]({encapsulation:2,styles:[["#keyboardInputMaster{position:absolute;padding:17.5px;font-family:'Lucida Console','Arial Unicode MS',monospace}.widescreen-default #keyboardInputMaster{background-color:#d9d9d9;color:#fff}#keyboardInputMaster thead{position:absolute;right:5px;top:2px;cursor:pointer}#keyboardInputMaster tbody tr td div var{display:none}#keyboardInputMaster tbody tr td div table tbody tr td{height:25px;min-width:25px;margin:2.5px;display:inline-block;padding:6px 5px;text-align:center;font-size:13px;cursor:pointer}.widescreen-default #keyboardInputMaster tbody tr td div table tbody tr td{background-color:#6d7588}#keyboardInputMaster tbody tr td div table tbody tr .CAPSLOCK{width:115px}#keyboardInputMaster tbody tr td div table tbody tr .BACKSPACE,#keyboardInputMaster tbody tr td div table tbody tr .CLEAR{width:85px}"]],data:{}});function a(t){return n["\u0275vid"](0,[],null,null)}},w4xe:function(t,e,i){"use strict";var n=i("67Y/"),o=i("amfQ"),a=i("aR35"),s=function(){function t(){this.appConfig=a.a.getInstance().getMasterConfig(),this.serviceHandler=new o.a}return t.prototype.createLoginCredentialsPublicKey=function(){return this.serviceHandler.getRequestEnvelope(this.appConfig.SERVICE.REQUEST_MODEL.DATA_ENTITY.LoginCredentialsEncryptionReq)},t.prototype.sendLoginCredentialsPublicKeyRequest=function(t){return this.serviceHandler.send(t,this.appConfig.COMMUNICATION.SERVICE.ENDPOINTS.AUTHN)},t}();i.d(e,"a",function(){return r});var r=function(){function t(){this.serviceHandler=new o.a,this.encryptService=new s}return t.prototype.pwdEncryption=function(){var t=this,e=this.encryptService.createLoginCredentialsPublicKey();return e.getPayload().setOperation("INQ"),this.encryptService.sendLoginCredentialsPublicKeyRequest(e).pipe(Object(n.a)(function(e){if(e.error)return e;var i=e.payload?e.getPayload().getDataEntity():[];return t.mapPublicKey(i)}))},t.prototype.mapPublicKey=function(t){var e=new function(){};return t.forEach(function(t){e.publicKey=t.value.values[0].secretValue.text}),e},t}()},w8ES:function(t,e,i){"use strict";var n=i("amfQ"),o=i("aR35"),a=function(){function t(){this.appConfig=o.a.getInstance().getMasterConfig(),this.serviceHandler=new n.a}return t.prototype.createValidatePasswordRequest=function(){return this.serviceHandler.getRequestEnvelope(this.appConfig.SERVICE.REQUEST_MODEL.DATA_ENTITY.ValidatePassword)},t.prototype.sendValidateCredentialsRequest=function(t,e){return void 0===e&&(e=this.appConfig.COMMUNICATION.SERVICE.ENDPOINTS.LOGIN),this.serviceHandler.send(t,e)},t}(),s=i("UQqR"),r=i("Uin7"),l=i("wvbV"),p=function(){function t(){this.appConfig=o.a.getInstance().getMasterConfig(),this.serviceHandler=new n.a}return t.prototype.createChangeLoginPwdConfirmRequest=function(){return this.serviceHandler.getRequestEnvelope(this.appConfig.SERVICE.REQUEST_MODEL.DATA_ENTITY.ChangeLgnPwdCnfRequest)},t.prototype.sendChangeLoginPwdConfirmRequest=function(t){return this.serviceHandler.send(t,this.appConfig.COMMUNICATION.SERVICE.ENDPOINTS.CHANGELOGINPWDCONFIRM)},t.prototype.createChangeLoginPwdUpdateRequest=function(){return this.serviceHandler.getRequestEnvelope(this.appConfig.SERVICE.REQUEST_MODEL.DATA_ENTITY.ChangeLgnPwdUpdRequest)},t.prototype.createChangeLoginPasswordUpdateRequest=function(){return this.serviceHandler.getRequestEnvelope(this.appConfig.SERVICE.REQUEST_MODEL.DATA_ENTITY.ChangeLoginPwdUpdRequest)},t.prototype.sendChangeLoginPwdUpdateRequest=function(t){return this.serviceHandler.send(t,this.appConfig.COMMUNICATION.SERVICE.ENDPOINTS.CHANGELOGINPWD)},t.prototype.createSelectedAccountEntity=function(t){return this.serviceHandler.getRequestEntity(t)},t.prototype.UpdatePwdNQnaRequest=function(){return this.serviceHandler.getUpdateMessageEnvelope(this.appConfig.SERVICE.REQUEST_MODEL.DATA_ENTITY.UpdateBothPWdAndQnA)},t.prototype.SendUpdatePwdNQnaRequest=function(t){return this.serviceHandler.send(t,this.appConfig.COMMUNICATION.SERVICE.ENDPOINTS.MODULE)},t}();i.d(e,"a",function(){return d});var d=function(){function t(){this.baseConfig=o.a.getInstance().getConfig().base,this.utils=s.a.getInstance(),this.dataStore=r.a.getInstance(),this.loginPasswordService=new p}return t.prototype.validateAdminPassword=function(t,e,i){void 0===e&&(e=this.utils.getActionUIID("CHANGE_ADMIN_PWD").uiid);var n=new a,o=n.createValidatePasswordRequest();o.getPayload().setOperation("VLD"),o.getPayload().setCategory(["min"]),o.uiidomain.uiidId=e;var s=o.getPayload().getDataEntity()[0];return this.setValidateAdminPasswordData(s,t,i),n.sendValidateCredentialsRequest(o).map(function(t){return t})},t.prototype.setValidateAdminPasswordData=function(t,e,i){return t.credentialScope=l.CredentialScope.ENUM.LOGIN,t.domainAddresses[0].appGroupId=this.baseConfig.appGroupId.admin.widescreen,t.domainAddresses[0].platformId=this.baseConfig.platformId,t.domainAddresses[0].applicationId="2",t.primaryVerificationData.password.text=i?e.encryptedData.curpwdEncrypted:e.currentPwd,t.primaryVerificationData.verificationType=l.VerificationType.ENUM.TRADITIONALPASSWORD,t},t.prototype.cnfChangeLoginPwd=function(t,e,i){var n=this.loginPasswordService.createChangeLoginPwdConfirmRequest();n.getPayload().setOperation("CNF"),n.uiidomain.uiidId=e;var o=n.getPayload().getDataEntity()[0];return o.operation="UPD",o.dataEntity[0]=this.setChangeLoginPwdData(o.dataEntity[0],t,i),this.loginPasswordService.sendChangeLoginPwdConfirmRequest(n).map(function(t){return t})},t.prototype.setChangeLoginPwdData=function(t,e,i){return console.log(t,"dataEntity"),console.log(e,"dataModel"),t.verificationIdentifier.name=this.dataStore.getData("username"),t.verificationIdentifier.userIdentifier.objectId=this.baseConfig.objectId,t.verificationIdentifier.userIdentifier.userStatus={},t.verificationIdentifier.userIdentifier.userStatus.Code="ACTIVE",t.domainAddresses[0].appGroupId=this.baseConfig.appGroupId.admin.customer,t.domainAddresses[0].applicationId=this.baseConfig.applicationId.retail,t.domainAddresses[0].platformId="Retail",t.domainAddresses[0].type={},t.domainAddresses[0].type.Code="DomainType1",t.credentialScope={},t.credentialScope.Code="LOGIN",t.primaryVerificationData.password.text=i?e.encryptedData.pwdEncrypted:e.newPassword,t.primaryVerificationData.password.salt.data="33.0",t.primaryVerificationData.password.salt.length=26542675432,t.primaryVerificationData.verificationType=l.VerificationType.ENUM.TRADITIONALPASSWORD,t},t.prototype.changeLoginPwd=function(t,e,i){void 0===e&&(e="HDW61");var n=this.loginPasswordService.createChangeLoginPwdUpdateRequest();n.getPayload().setOperation("UPD"),n.uiidomain.uiidId=e;var o=n.getPayload().getDataEntity()[0];return this.setChangeLoginPwdData(o,t,i),this.loginPasswordService.sendChangeLoginPwdUpdateRequest(n).map(function(t){return t})},t}()},zMhT:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i("CcnG"),o=(i("nn1f"),function(){function t(t){this.el=t,this.valueChange=new n.EventEmitter}return t.prototype.ngOnChanges=function(){vkeyboard1.VKI_numberPad=this.options.enableNumberPad,vkeyboard1.VKI_attachVKBtoElem=this.options.attachVKBtoElem,vkeyboard1.VKI_inputElement=this.options.inputElemForKeyboard,vkeyboard1.VKI_imageURI=this.options.clickElemToEnableKeyboard,vkeyboard1.VKI_positioningVKB=this.options.positioningVKB,vkeyboard1.VKI_elemBottom=this.options.elemPositionFromBottom,vkeyboard1.VKI_elemTop=this.options.elemPositionFromTop,vkeyboard1.VKI_elemLeft=this.options.elemPositionFromLeft,vkeyboard1.VKI_elemRight=this.options.elemPositionFromRight,vkeyboard1.VKI_attachVKBtoElem&&vkeyboard1.VKI_inputElement&&vkeyboard1.VKI_imageURI&&(vkeyboard1.VKI_close(),vkeyboard1.VKI_buildKeyboard(),vkeyboard1.VKI_attach(vkeyboard1.VKI_inputElement,this))},t.prototype.onKeyboardEnter=function(t){this.valueChange.emit(t)},t}())}}]);