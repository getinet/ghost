import MainHeader from './MainHeader';
import React from 'react';
import {Button} from '@tryghost/admin-x-design-system';
import {useRouting} from '@tryghost/admin-x-framework/routing';

interface MainNavigationProps {
    page: string;
}

const MainNavigation: React.FC<MainNavigationProps> = ({page}) => {
    const {updateRoute} = useRouting();

    return (
        <MainHeader>
            <div className='col-[1/2] flex gap-8 px-8'>
                <Button
                    className={`${page === 'inbox' ? 'font-bold text-grey-975' : 'text-grey-700 hover:text-grey-800'}`}
                    label='Inbox'
                    unstyled
                    onClick={() => updateRoute('inbox')}
                />
                <Button
                    className={`${page === 'feed' ? 'font-bold text-grey-975' : 'text-grey-700 hover:text-grey-800'}`}
                    label='Feed'
                    unstyled
                    onClick={() => updateRoute('feed')}
                />
                <Button
                    className={`${page === 'notifications' ? 'font-bold text-grey-975' : 'text-grey-700 hover:text-grey-800'}`}
                    label='Notifications'
                    unstyled
                    onClick={() => updateRoute('notifications')}
                />
                <Button
                    className={`${page === 'search' ? 'font-bold text-grey-975' : 'text-grey-700 hover:text-grey-800'}`}
                    label='Search'
                    unstyled
                    onClick={() => updateRoute('search')}
                />
                <Button
                    className={`${page === 'profile' ? 'font-bold text-grey-975' : 'text-grey-700 hover:text-grey-800'}`}
                    label='Profile'
                    unstyled
                    onClick={() => updateRoute('profile')}
                />
            </div>
        </MainHeader>
    );
};

export default MainNavigation;
