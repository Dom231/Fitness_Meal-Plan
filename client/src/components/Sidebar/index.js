import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,SideBtnWrap,SidebarMenu,SidebarLink, SidebarRoute } from './sidebarElement';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to='home' onClick={toggle}>
                Home
            </SidebarLink>
            <SidebarLink to='/meallist' onClick={toggle}>
            Meal Plan
            </SidebarLink>
            <SidebarLink to='/me' onClick={toggle}>
            Profile
            </SidebarLink>
            <SidebarLink to='/aboutus' onClick={toggle}>
            About Us
            </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Login</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
