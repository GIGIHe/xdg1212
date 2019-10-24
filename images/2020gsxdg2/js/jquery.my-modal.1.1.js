var MyModal = (function() {
	let m;

	function modal(modal,fn) {
		m = modal;
		this.fn = fn; //点击确定后的回调函数
		this._addClickListen();
	}
	modal.prototype = {
		show: function() {
			$('.'+m).fadeIn(100);
			$('.'+m).children('.m-modal-dialog').animate({
				"margin-top": "30px"
			}, 250);
			//console.log(m);
		},
		_addClickListen: function() {
			var that = this;
			$("."+m).find('*').on("click", function(event) {
				event.stopPropagation(); //阻止事件冒泡
			});
			$("."+m+",.m-modal-close,.m-btn-cancel").on("click", function(event) {
				that.hide(modal);
			});
			$(".m-btn-sure").on("click", function(event) {
				that.fn();
				that.hide();
			});
		},
		hide: function() {
			var $modal = $('.'+m);
			$modal.children('.m-modal-dialog').animate({
				"margin-top": "-100%"
			}, 500);
			$modal.fadeOut(100);
		}

	};
	return {
		modal: modal
	}
})();


