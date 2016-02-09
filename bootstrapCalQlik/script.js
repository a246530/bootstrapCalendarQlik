Qv.AddExtension("bootstrapCalQlik",
        function () {
		//Load CSS
		Qva.LoadCSS('Extensions/bootstrapCalQlik/bootstrap-datepicker3.standalone.min.css');
		Qva.LoadCSS('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
		//Load JS
		Qva.LoadScript('https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js');
		Qva.LoadScript('Extensions/bootstrapCalQlik/bootstrap-datepicker.min.js');
		
		//Constructor
		 var _this = this;
		_this.bootstrapCalQlik = {};
		_this.bootstrapCalQlik.UniqueId = this.Layout.ObjectId.replace("\\", "_");
		_this.bootstrapCalQlik.ExtensionLoaded = false;
		_this.bootstrapCalQlik.VariableName =this.Layout.Text0.text ? this.Layout.Text0.text : '';
		_this.bootstrapCalQlik.Heading =this.Layout.Text1.text;
		_this.bootstrapCalQlik.minDate =this.Layout.Text2.text;
		_this.bootstrapCalQlik.maxDate =this.Layout.Text3.text;
		_this.bootstrapCalQlik.ExtensionName = "bootstrapCalQlik";
		_this.bootstrapCalQlik.CurrentValue="";
		 Extension_Load();
		
		
		
		 //Load extension
		function Extension_Load() {
			RetrieveSettings(function () {
				RenderExtension();
				_this.bootstrapCalQlik.ExtensionLoaded = true;
			});
        }
		
		
		//Get Settings
		function RetrieveSettings(fnCallBack) {
            RetrieveInitVarValue(fnCallBack);
        }
		
		
		//Get Initial Values for variables
		function RetrieveInitVarValue(fnCallBack) {
			var qvDoc = Qv.GetCurrentDocument();
			qvDoc.GetAllVariables(function (vars) {
				if (vars != null) {
					for (var i = 0; i < vars.length; i++) {
						var obj = vars[i];
						if ((obj.isreserved == "false") && (obj.isconfig == "false")) {
							if (obj.name.toLowerCase() == _this.bootstrapCalQlik.VariableName.toLowerCase()) {
								if (obj.value!='') {
									_this.bootstrapCalQlik.CurrentValue = obj.value.toString();
									fnCallBack();
									return;
								}
							}
						}
					}
				}
			});
			fnCallBack();
        }
		
		
		//Render Extension view
		function RenderExtension() {
			html="";
			html+='<h4 style="padding-left:6px;">'+_this.bootstrapCalQlik.Heading+'</h4>';
			html+='<div class="input-group date datepick" style="padding-left:6px;padding-right:6px;" id="'+GetUniqueId()+'"><input id="input_'+GetUniqueId()+'" type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span></div>';
			_this.Element.innerHTML=html;
			/*$('.datepick').each(function(){
				$(this).datepicker()
				.on('changeDate', function(e) {
					SetValue();
				});
			});*/
			$('#'+GetUniqueId()).datepicker({
				startDate: _this.bootstrapCalQlik.minDate,
				endDate: _this.bootstrapCalQlik.maxDate
			});
			if(_this.bootstrapCalQlik.CurrentValue!='')
			{
				var d = new Date(_this.bootstrapCalQlik.CurrentValue);
				var dayofmonth=d.getDate();
				var currMonth = d.getMonth();
				var currYear = d.getFullYear();
				var startDate = new Date(currYear,currMonth,dayofmonth);
				$('#'+GetUniqueId()).datepicker('setDate',startDate);
			}
		}
			
			
		//Set Value View
		function SetValue() {
			var qvDoc = Qv.GetCurrentDocument();
			_this.bootstrapCalQlik.CurrentValue=document.getElementById('input_'+GetUniqueId()).value;
			qvDoc.SetVariable(_this.bootstrapCalQlik.VariableName, _this.bootstrapCalQlik.CurrentValue);
		}
			
		
		//Get Unique ID
		function GetUniqueId() {
			return _this.bootstrapCalQlik.UniqueId;
		}


 });
 
 
