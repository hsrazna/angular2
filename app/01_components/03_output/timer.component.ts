import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "timer",
    templateUrl: "timer.component.html"
})
export class TimerComponent {
    private intervalObject: any;
    private currentValue: number = 0;

    @Input()
    interval: number = 1000;

    @Output()
    tick: EventEmitter<number> = new EventEmitter();

    @Output()
    simple: EventEmitter<string> = new EventEmitter();

    issimple(a: number){
        let iss: boolean = true;
        for(let i = 2; i < a; i++ ){
            if(a%i==0){
                iss = false;
            }
        }
        return iss;
    }

    start() {
        if (this.intervalObject) return;
        this.intervalObject = setInterval(() => { this.callback() }, this.interval);
    }

    stop() {
        if(!this.intervalObject) return;
        clearInterval(this.intervalObject);
        this.intervalObject = false;
    }

    private callback() {
        this.currentValue++;
        this.tick.emit(this.currentValue);
        if(this.issimple(this.currentValue)){
            this.simple.emit(this.currentValue);
        }
    }
}