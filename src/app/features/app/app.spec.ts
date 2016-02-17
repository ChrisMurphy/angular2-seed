/// <reference path="../../../typings/browser.d.ts" />
import {it, describe, expect, beforeEach} from 'angular2/testing';
import {Application} from './app';

describe('Application', () => {
    let application:Application;

    beforeEach(() => {
        application = new Application();
    });

    it('should have a message property', () => {
        expect(application.message).toBe('test');
    });
});
