/// <reference path="../../../typings/browser.d.ts" />
import {it, describe, expect, beforeEach} from '@angular/core/testing';
import {App} from './app.component';

describe('Application', () => {
    let app:App;

    beforeEach(() => {
        app = new App();
    });

    it('should have a message property', () => {
        expect(app.message).toBe('test');
    });
});
