/**
 * Created by maryna on 12/04/15.
 */
'use strict';

angular.module('musicListAppService', ['ngResource'])

    .factory('RecentMusicList', ['$resource',
        function($resource){
            return $resource('http://ws.audioscrobbler.com/2.0/', {}, {
                query: {method:'GET',
                    params:{ method: 'method',
                        user: 'user',
                        api_key: 'api_key',
                        format: 'format',
                        limit: 'limit',
                        page: 'page'},
                    isArray:false}
            });
        }]);