import html from '../html.js';
import productApi from '../services/product-api.js';
import Report from './results-report.js';
import Header from './header.js';

let template = function() {
    return html`        
        <body>
            <section class="header"></section>  
            <section class="results-list"></section>
            <section class="methodology">

                <h2>Methodology</h2>

                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
            
                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                
            </section>
        <body>
    `;
};

export default class ResultsApp {
    constructor() {
        this.products = productApi.get();
    }

    render() {
        let dom = template();
        let results = dom.querySelector('.results-list');

        let headerDisplay = dom.querySelector('.header');
        let header = new Header ({});
        headerDisplay.appendChild(header.render());

        let report = new Report ({
            results: this.products
        });
        results.appendChild(report.render());
     
        return dom;

    }
}


