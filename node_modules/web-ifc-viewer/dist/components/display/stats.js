import { IfcComponent } from '../../base-types';
export class IfcStats extends IfcComponent {
    initializeStats(Stats) {
        this.stats = new Stats();
        this.stats.showPanel(0);
    }
    update(_delta) {
        if (this.stats) {
            this.stats.update();
        }
    }
    addStats(css = '') {
        if (css.length > 0)
            this.stats.dom.style.cssText = css;
        document.body.appendChild(this.stats.dom);
    }
}
//# sourceMappingURL=stats.js.map