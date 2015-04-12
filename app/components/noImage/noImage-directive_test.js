/**
 * Created by maryna on 12/04/15.
 */
'use strict';

describe('musicListAppViewDirective module', function() {
    beforeEach(module('musicListAppViewDirective'));
    describe('no-image directive', function() {
        it('should set empty image placeholder for albums without image', function() {
            module(function($provide) {
                //$provide.value('src', 'img/no_image_64.png');
            });
            inject(function($compile, $rootScope) {
                // var element = $compile('<img no-image/>')($rootScope);
                //expect(element.img).toEqual('TEST_VER');
            });
        });
    });
});