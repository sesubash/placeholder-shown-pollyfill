/*!===============================================
* Polyfill for pseudo selector :placeholder-shown
* Author: Subash Selvaraj (github userid:sesubash) & enhanced by Kravimir
*================================================*/
(function(){
	var d=document,placeholderShownPolyfill = {
		init: function() {
			var self = placeholderShownPolyfill,
				p = "placeholder",
				head = d.querySelector("head"),
				fld = d.createElement("input"),
				style = d.createElement("style"),
				r = "{padding-top:183px}";
			fld.setAttribute("id","PhSTf");
			fld.setAttribute(p,"\x20");
			style.textContent="#PhSTf{position:absolute;visibility:hidden}#PhSTf:"+
				p+"-shown"+r+"#PhSTf:-ms-input-"+p+r+"#PhSTf:-moz-"+p+r;
			head.appendChild(style);
			fld=d.body.appendChild(fld);
			var x=window.getComputedStyle(fld, null).paddingTop;
			d.body.removeChild(fld);
			head.removeChild(style);
			if(x==="183px") {
				d.documentElement.classList.add("placeholderPseudo");
				return;
			}
			d.querySelectorAll("input["+p+"],textarea["+p+"]").forEach(function(el) {
				if(el.getAttribute(p) != "")
					self.update.call(el);

				for(var n=0,a=["blur","keyup","input","focus"];n<a.length;n++)
					el.addEventListener(a[n], self.update, null);
			});
		},
		update: function() {
			this.classList[this.value ? "remove" : "add"]("placeholder-shown");
			// fix for old Webkit browsers, including Android 4.x
			for(var l=this.nextSibling;l;l=l.nextSibling) 
				if(l.nodeType==1 && l.nodeName.toLowerCase()=="label") 
					l.classList.toggle("androidFix");
		}
	};

	if (/^[ci]|d$/.test(d.readyState || "")) {
		placeholderShownPolyfill.init();
	} else {
		d.addEventListener("DOMContentLoaded", placeholderShownPolyfill.init, null);
	}

	window.placeholderShownPolyfill = placeholderShownPolyfill;
	d.documentElement.classList.add("phsJS");
})();
