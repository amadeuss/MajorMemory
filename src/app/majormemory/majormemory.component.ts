import { Component, OnInit } from '@angular/core';

import { MajorMemoryService } from './majormemory.service';
import { MajorMemoryNumber } from './majormemorynumber';

@Component({
    selector: 'app-mm-component',
    moduleId: module.id,
    templateUrl: 'majormemory.component.html',
    styleUrls: ['majormemory.component.css'],
    providers: [ MajorMemoryService ]
})
export class MajorMemoryComponent implements OnInit {
    pageTitle = 'Major Memory!';
    currentNumber = '00';
    answer: MajorMemoryNumber;
    showMnemonics = false;

    constructor(private majorMemoryNumberService: MajorMemoryService) {}

    getRandomNumber(): string {
        // generate 2 random integers and return them as a combined string to form a 2 digit string
        const firstDigit = Math.floor(Math.random() * 10);
        const secondDigit = Math.floor(Math.random() * 10);

        this.answer = null;
        return this.currentNumber = String(firstDigit) + String(secondDigit);
    }

    getAnswer() {
        this.majorMemoryNumberService.getMajorMemoryNumber(this.currentNumber)
            .subscribe(majorMemoryNumber => this.answer = majorMemoryNumber);
    }

    toggleMnemonics() {
        this.showMnemonics = !this.showMnemonics;
    }

    ngOnInit() {
        this.getRandomNumber();
    }
}
