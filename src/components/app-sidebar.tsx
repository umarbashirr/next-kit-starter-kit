"use client";

import {
  IconDashboard,
  IconInnerShadowTop,
  IconListDetails,
} from "@tabler/icons-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useParams } from "next/navigation";
import { Logo } from "./logo";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { orgId } = useParams();
  const navMain = [
    {
      title: "Dashboard",
      url: `/org/${orgId}/dashboard`,
      icon: IconDashboard,
    },
    {
      title: "Projects",
      url: `/org/${orgId}/projects`,
      icon: IconListDetails,
    },
  ];

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Logo href={`/org/${orgId}/dashboard`} iconSize={8} />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
