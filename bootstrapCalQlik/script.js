Qv.AddExtension("bootstrapCalQlik",
        function () {
			//by default we start at medium
		 //Qva.LoadCSS(Qva.Remote + (Qva.Remote.indexOf('?') >= 0 ? '&' : '?') + 'public=only' + '&name=Extensions/materialToggle/materialToggle.css');
		Qva.LoadCSS('Extensions/bootstrapCalQlik/bootstrap-datepicker3.standalone.min.css');
		Qva.LoadCSS('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
		
		Qva.LoadScript('https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js');
		Qva.LoadScript('Extensions/bootstrapCalQlik/bootstrap-datepicker.min.js');
		 var _this = this;
		_this.bootstrapCalQlik = {};
		_this.bootstrapCalQlik.UniqueId = this.Layout.ObjectId.replace("\\", "_");
		_this.bootstrapCalQlik.ExtensionLoaded = false;
		_this.bootstrapCalQlik.VariableName =this.Layout.Text0.text;
		_this.bootstrapCalQlik.ExtensionName = "materialCalendar";
		_this.bootstrapCalQlik.CurrentValue="";
		 $(_this.Element).empty();
		RenderExtension();

		
		
		

				//"+color+" "+size"'
			
		function RenderExtension() {
			html="";
			html='<div class="input-group date" style="padding:10px;"><input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span></div>';
			_this.Element.innerHTML=html;
			$('.input-group.date').datepicker({
			});
		}
			
			
			
		
		
		function GetUniqueId() {
			return _this.materialCalendar.UniqueId;
		}


 });
 
 
