/* myhandlebars */

(function(){
	var content = document.getElementById('content');
	var html = '';
	var data = {
		title: 'THE CODE REVIEW',
		announcement: "Sign up for our newsletter",
		subheading: "Get the latest news on how your code is doing right in your inbox",
		contactintro: {
			text: "Contact Information",
			cssclass: 'contact-intro formLabel'
		},
		flexcontainers: {
			spread: "mg-box-spread mg-vcenter",
			left: "mg-box-left",
			leftcenter: "mg-box-left mg-vcenter",
			vertical: "mg-vbox mg-vcenter",
		},
		flexchildren: {
			full: "mg-clip-12"
		},
		formLabel: [
			{
				id: 'name',
				name: 'name',
				fer: 'name',
				type: 'text',
				inputclass: 'textInput mg-clip-xs-9 mg-clip-portrait-full',
				labelclass: 'inputLabel mg-clip-xs-3 mg-clip-portrait-full',
				label: 'Full Name',
				placeholder: 'required'
			},
			{
				id: 'email',
				name: 'email',
				fer: 'email',
				type: 'email',
				inputclass: 'textInput mg-clip-xs-9 mg-clip-portrait-full',
				labelclass: 'inputLabel mg-clip-xs-3 mg-clip-portrait-full',
				label: 'Email Address',
				placeholder: 'required'
			},
			{
				id: 'phone',
				name: 'phone',
				fer: 'phone',
				type: 'tel',
				inputclass: 'textInput mg-clip-xs-9 mg-clip-portrait-full',
				labelclass: 'inputLabel mg-clip-xs-3 mg-clip-portrait-full',
				label: 'Phone Number',
				placeholder: ''
			},
			{
				id: 'address',
				name: 'address',
				fer: 'address',
				type: 'text',
				inputclass: 'textInput mg-clip-xs-9 mg-clip-portrait-full',
				labelclass: 'inputLabel mg-clip-xs-3 mg-clip-portrait-full',
				label: 'Street Address',
				placeholder: ''
			},
			{
				id: 'city',
				name: 'city',
				fer: 'city',
				type: 'text',
				inputclass: 'textInput mg-clip-xs-9 mg-clip-portrait-full',
				labelclass: 'inputLabel mg-clip-xs-3 mg-clip-portrait-full',
				label: 'City',
				placeholder: ''
			}
		],
		states: {
			id: 'states',
			name: 'states',
			fer: 'states',
			type: 'select',
			label: 'State',
			inputclass: 'textInput',
			labelclass: 'inputLabel mg-clip-xs-3 mg-clip-portrait-full',
			selectclass: 'styled-select mg-clip-xs-9 mg-clip-portrait-full',
			placeholder: 'Choose State',
			state: ["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District Of Columbia","Federated States Of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Islands","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
		},
		zipcode: {
			id: 'zipcode',
			name: 'zipcode',
			fer: 'zipcode',
			type: 'tel',
			label: 'Zip Code',
			maxlength: "5",
			labelclass: 'inputLabel mg-clip-xs-6 mg-clip-sm-3',
			inputclass: 'textInput mg-clip-6 mg-clip-sm-4'
			
		},
		news: {
			cssclass: "newsletter",
			newsletter: "Newsletter",
			newsintro: "Select the newsletters you would like to receive",
			newsFormat: "Newsletter format",
			flexchild: "mg-clip-12",
			newsletters: [
				{
					id: 'html_news',
					value: 'html_news',
					name: 'newsletters',
					type: 'checkbox',
					flexcontainer: "mg-hbox-left",
					flexchild: "mg-clip-12",
					inputclass: 'checkRadio check mg-clip',
					labelclass: 'checkRadLabel mg-clip',
					fer: 'html_news',
					label: 'HTML News'
				},
				{
					id: 'css_news',
					value: 'css_news',
					name: 'newsletters',
					type: 'checkbox',
					flexcontainer: "mg-hbox-left",
					flexchild: "mg-clip-12",
					inputclass: 'checkRadio check mg-clip',
					labelclass: 'checkRadLabel mg-clip',
					fer: 'css_news',
					label: 'CSS News'
				},
				{
					id: 'javascript_news',
					value: 'javascript_news',
					name: 'newsletters',
					type: 'checkbox',
					flexcontainer: "mg-hbox-left",
					flexchild: "mg-clip-12",
					inputclass: 'checkRadio check mg-clip',
					labelclass: 'checkRadLabel mg-clip',
					fer: 'javascript_news',
					label: 'JavaScript News'
				}
			]
		},
		radio: [
			{
				type: "radio",
				id: "html_format",
				fer: "html_format",
				value: "html_format",
				name: "format",
				flexcontainer: "mg-hbox-left",
				flexchild: "mg-clip-12",
				inputclass: "checkRadio radio mg-clip",
				labelclass: "checkRadLabel mg-clip",
				label: "HTML"
			},
			{
				type: "radio",
				id: "plain_text",
				fer: "plain_text",
				value: "plain_text",
				name: "format",
				flexcontainer: "mg-hbox-left",
				flexchild: "mg-clip-12",
				inputclass: "checkRadio radio mg-clip",
				labelclass: "checkRadLabel mg-clip",
				label: "Plain text"
			}
		],
		comments: {
			title: "Other topics you'd like to hear about",
			fer: "commentsbox",
			id: "commentsbox",
			placeholder: "max 1000 characters",
			spellcheck: "true",
			maxlength: "1000",
			flexchild: "mg-clip-12",
			textareacss: "textInput mg-clip-12"
		},
		submit: {
			type: "submit",
			inputclass: "submit",
			value: "Sign Up"
		},
		footer: {
			textcontent: "Copyright The Code Review",
			cssclass: "footerclass"
		}
		
	};

	/* compiling template */
	var formtemplate = Handlebars.compile(document.getElementById('formtemplate').innerHTML); // grabs the string of html 

	content.innerHTML = formtemplate(data);


})();