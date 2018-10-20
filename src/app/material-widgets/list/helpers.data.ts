export const LIST_HELPERS: any = {

	tsSourceSelectionList:`
	<div class="description">
		<p><b>CPA System</b> is a global pay per action company that focuses on growing revenue for advertisers and publishers. Our technology exceeds industry standards.</p>
		<p>CPA System creates a marketplace for optimal delivery of quality offers and traffic by partnering with valuable advertisers and top performing publishers.</p>
		<p>Here at CPA System  — we Pay Attention to You and Your business needs.</p>
	</div>
	`.trim(),


	htmlSourceSelectionList:`
	<mat-selection-list #shoes>
		<mat-list-option *ngFor="let shoe of ['Boots', 'Sneaker', 'Casual']">
			{{shoe}}
		</mat-list-option>
	</mat-selection-list>
	<p>
		Options selected: {{shoes.selectedOptions.selected.length}}
	</p>
	`.trim(),
}
	export const Messages: Array<any> =[
		{from: 'codetok', subject: 'client', content: 'hi there'},
		{from: 'client', subject: 'codetok', content: 'yes'},
		{from: 'jay', subject: 'tom', content: 'yes please'}
	];

	export const Links: Array<String> = ['/home', '/admin'];

	//export const shoetypes: Array<any> = ['Boots', 'Sneaker', 'Casual'];
