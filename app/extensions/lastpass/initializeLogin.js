var bg=function(a){for(var b in a)if("function"===typeof a[b].receiveTS)return a[b]}(chrome.extension.getViews());bg.shouldOpenDropdown4_0()?window.location="extensionDropdown.html":bg.shouldOpenLogin4_0()||(window.location="lp_toolstrip.html?browseraction=1");Strings.translateStrings(Strings.Vault);window.addEventListener("DOMContentLoaded",function(){dialogs.login.dialogOptions={setBodyHeight:!0};LPPlatform.openLoginPopover()});window.addEventListener("unload",function(){Dialog.prototype.closeAllDialogs(!0)});