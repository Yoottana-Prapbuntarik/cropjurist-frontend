import { useEffect } from 'react';
import Router from 'next/router';
import { routeToMemberPage } from '../manager/routerManager';

const checkToken = () => {
    
   useEffect(() => {
        if (localStorage.getItem('access-token') && window.location.pathname !== routeToMemberPage) {
            Router.push(routeToMemberPage);
        }
    }, []);
}

export default checkToken;