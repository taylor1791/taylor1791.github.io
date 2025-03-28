/* BEGIN Configuration */

if(typeof _cls_config === "undefined") _cls_config = {};

 //PJB added per 183615
 _cls_config.domFuseElementCount=100000;
 _cls_config.domRemoveAttributes = ["for", "aria-hidden", "aria-labelledby","integrity"];

/* BEGIN ajax 98587*/
_cls_config.interceptAjax = "true";
_cls_config.ajaxRecordMetadata = "never";
_cls_config.ajaxRecordResponseBody = "never";
_cls_config.ajaxRecordResponseHeaders = "and(statusgte(300),tld)";
_cls_config.ajaxRecordRequestBody = "never";
_cls_config.ajaxRecordRequestHeaders = "and(statusgte(300),tld)";
_cls_config.ajaxRecordStats = "always";
/* END ajax */


/*BEGIN MASKING*/

//Value Masking (INPUT)
_cls_config.valueMaskingMode = "whitelist";
_cls_config.maskWhitelistValueById = []; //Everything is masked EXCEPT FOR listed inputs that match an Id , This is only applied when valueMaskingMode is set to 'whitelist'
_cls_config.maskBlacklistValueById = ["transactions-table", "patient-select"]; //Only listed inputs with a matching Id are masked , This is only applied when valueMaskingMode is set to 'blacklist'.
_cls_config.maskWhitelistValueByClass = []; //Everything is masked EXCEPT FORlisted inputs that match a class , This is only applied when valueMaskingMode is set to 'whitelist'.
_cls_config.maskBlacklistValueByClass = ["card-body","new-summary","payment-account-box","payment-account-box-selected","redacted"]; //Only listed inputs with a matching Class are masked , This is only applied when valueMaskingMode is set to 'blacklist'.
_cls_config.valueWhitelistMaskSimpleSelector = []; //EVERYTHING is masked EXCEPT FOR this list of selectors , This is only applied when valueMaskingMode is set to 'whitelist'.
_cls_config.valueBlacklistMaskSimpleSelector = []; //Only listed inputs with a matching selector are masked. , This is only applied when valueMaskingMode is set to 'blacklist'.

//DOM Masking
_cls_config.domMaskingMode = "blacklist";
_cls_config.domWhitelistMaskContentById = []; //ALL text is masked EXCEPT FOR this list of Ids. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'whitelist'.
_cls_config.domBlacklistMaskContentById = ["transactions-table", "patient-select","profile-menu"]; //ONLY text matched to this list of Ids is masked. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'blacklist'.
_cls_config.domWhitelistMaskContentByClass = []; //ALL text is masked EXCEPT FOR this list of classes. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'whitelist'.
_cls_config.domBlacklistMaskContentByClass = ["card-body","new-summary","payment-account-box","payment-account-box-selected","redacted","maskpii","r-edyy15","r-2o02ov"]; //ONLY text matched to this list of classes is masked. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'blacklist'.
_cls_config.domWhitelistMaskSimpleSelector = []; //ALL text is masked, EXCEPT FORthe listed selectors. This is only applied when domMaskingMode is set to 'whitelist'.
_cls_config.domBlacklistMaskSimpleSelector = ['#maincontent > div.below-nav > div > h1','body > div.sticky-top.alert.alert-warning.mb-0.text-center','#maincontent > div.py-3.bg-white.shadowed.below-nav','#max-height > div.css-175oi2r.r-18u37iz.r-1q142lx > div.css-175oi2r.r-105ug2t > div > div > div > div.css-175oi2r.r-1udh08x.r-1faleph.r-52d28o > div:nth-child(3) > div > div:nth-child(2)','#max-height > div.css-175oi2r.r-18u37iz.r-1q142lx > div.css-175oi2r.r-105ug2t > div > div > div > div.css-175oi2r.r-1udh08x.r-1faleph.r-fbgjfj > div.css-175oi2r.r-16lk18l > h1','#max-height > div.css-175oi2r.r-18u37iz.r-1q142lx > div.css-175oi2r.r-105ug2t > div > div > div > div.css-175oi2r.r-1udh08x.r-1faleph.r-52d28o > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(3)','#max-height > div.css-175oi2r.r-105ug2t > div > div > div.css-175oi2r.r-1habvwh.r-14lw9ot.r-eqz5dr.r-1h0z5md.r-t7x54m.r-t2rigz > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div > div.css-175oi2r.r-6koalj.r-13awgt0.r-eqz5dr.r-1777fci > div','#max-height > div.css-175oi2r.r-105ug2t > div > div > div.css-175oi2r.r-1habvwh.r-14lw9ot.r-eqz5dr.r-1h0z5md.r-t7x54m.r-t2rigz > div > div:nth-child(2) > div > div', '#max-height > div.css-175oi2r.r-105ug2t > div > div > div.css-175oi2r.r-1habvwh.r-14lw9ot.r-eqz5dr.r-1h0z5md.r-t7x54m.r-t2rigz > div > div:nth-child(3) > div:nth-child(6) > div', '#max-height > div.css-175oi2r.r-105ug2t > div > div > div.css-175oi2r.r-1habvwh.r-14lw9ot.r-eqz5dr.r-1h0z5md.r-t7x54m.r-t2rigz > div > div.css-175oi2r.r-1peese0 > div > div:nth-child(2) > div', '#max-height > div > div.css-175oi2r.r-105ug2t > div > div > div > div > div.css-175oi2r.r-gecgo1.r-1q9bdsx.r-rs99b7.r-1udh08x > div.css-175oi2r.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-1sncvnh > div','#max-height > div > div.css-175oi2r.r-105ug2t > div > div > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1h0z5md.r-ry3cjt > div:nth-child(1) > div:nth-child(2)','#max-height > div > div.css-175oi2r.r-105ug2t > div > div > div:nth-child(3) > div:nth-child(2)','#max-height > div > div.css-175oi2r.r-105ug2t > div > div > div:nth-child(4) > div:nth-child(2)','#max-height > div > div.css-175oi2r.r-105ug2t > div > div > div:nth-child(5) > div:nth-child(2)','#max-height > div > div.css-175oi2r.r-105ug2t > div > div > div:nth-child(6) > div:nth-child(2)','#max-height > div > div.css-175oi2r.r-105ug2t > div > div > div:nth-child(7) > div:nth-child(2)','#max-height > div > div.css-175oi2r.r-105ug2t > div > div > div:nth-child(7) > div:nth-child(3)','#max-height > div > div.css-175oi2r.r-105ug2t > div > div > div:nth-child(7) > div:nth-child(4)','#max-height > div > div.css-175oi2r.r-105ug2t > div > div > div:nth-child(7) > div:nth-child(5)','#max-height > div > div.css-175oi2r.r-105ug2t > div > div > div:nth-child(7) > div:nth-child(6)','#max-height > div > div.css-175oi2r.r-105ug2t > div > div > div.css-175oi2r.r-633pao > div > div > div > div > div:nth-child(1) > div.css-1rynq56.r-fdjqy7.r-135wba7','#max-height > div > div.css-175oi2r.r-105ug2t > div > div > div.css-175oi2r.r-633pao > div > div > div > div > div > div.css-175oi2r.r-1mdbw0j.r-1dsia8u.r-1f720gc > div.css-1rynq56.r-fdjqy7.r-135wba7.r-1kvfpx.r-1i10wst.r-1mdbw0j'];

//185595
 _cls_config.domOmitById=["material_icons_filled", "uhc_icons_twotonedarkcircle"];
/*END MASKING*/


/* Page Performance Waterfall */
_cls_config.resourceTimingRecordEnabled=true;
_cls_config.resourceTimingRecordEnabledByChance=0.05;
_cls_config.webVitalsRecordEnabled=true;
/* Page Performance Waterfall */


_cls_config.iframesAutoInject=true;
_cls_config.recordMouseMoves=true; 
_cls_config.recordScrolls=true;
_cls_config.recordHovers=true;
_cls_config.clientAttributesEnabled=true;
_cls_config.clientAttributeMaxLength=500;
_cls_config.collectStruggles=true;
_cls_config.captureGlobalObjects=[];
_cls_config.captureGlobalObjectsOnSegmentChange=true;

/* Resource Recording start */
_cls_config.resourcesRecordEnabled=true;
_cls_config.resourcesRecordCount=5;
_cls_config.resourcesRecordChance=0.2;
_cls_config.resourcesRecordAllowCors=true;
_cls_config.domTamperingDetectionEnabled=true;
/* Resource Recording End */

/* Third party */
_cls_config.interceptAdobeABEvent=true;
_cls_config.interceptABTesting=true;
_cls_config.abTestingGlobalObject="ttMeta";
_cls_config.interceptAjax = true;
_cls_config.interceptThirdPartyAttributes=true;

/* Opt Out Config 81681*/
 
_cls_config.checkOptOutUsingCors = true;

//187631
_cls_config.suppressEventsAfterSnapshotTimeout=['resize', 'thirdPartyAttribute', 'thirdpartymap', 'abTesting', 'thirdparty', 'clientAttribute', 'document'];

//over write the tag
_cls_config.reportURI= "https://report.uhg.glassboxdigital.io/glassbox/reporting/012dea2a-82e0-1365-3ae8-b77787b7a27b/cls_report";

/* END Configuration */

/* BEGIN V7 detector requirements */
_cls_config.initDetectorOnInteractive = true;
_cls_config.detectorPath = 'https://cdn.gbqofs.com/uhg/common/p/';
/* End V7 detector requirements */