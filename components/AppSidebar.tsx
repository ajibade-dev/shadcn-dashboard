import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2, CircleDollarSign } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "./ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible"
import { CollapsibleContent } from "@radix-ui/react-collapsible"

const items = [
    {
        title:"Home",
        url:"/",
        icon: Home,
    },
     {
        title:"Users",
        url:"/users/test",
        icon: Inbox,
    },
     {
        title:"Payments",
        url:"/payments",
        icon: CircleDollarSign,
    },
     {
        title:"Search",
        url:"#",
        icon: Search,
    },
     {
        title:"Settings",
        url:"#",
        icon: Settings,
    },

]
const AppSidebar = () => {
  return (
    <Sidebar collapsible='icon'>
        <SidebarHeader className="py-4">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                    <Link href="/">
                    <Image src='/vercel.svg' width={20} height={20} alt="logo"/>
                    <span>P.Dev</span>
                    </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator className="mx-0" />
        <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* second group */}
        <SidebarGroup>
              <SidebarGroupLabel>Projects</SidebarGroupLabel>
               <SidebarGroupAction>
            <Plus  /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                    <Link href='#  '>
                    <Projector />
                    See All Projects
                    </Link>
                    </SidebarMenuButton>
                 </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                    <Link href='#  '>
                    <Plus />
                    Add Projects
                    </Link>
                    </SidebarMenuButton>
                 </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* third one is collapsible */}
        <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
              <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
            Collapsible Group
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                    <Link href='#  '>
                    <Projector />
                    See All Projects
                    </Link>
                    </SidebarMenuButton>
                 </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                    <Link href='#  '>
                    <Plus />
                    Add Projects
                    </Link>
                    </SidebarMenuButton>
                 </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
        </Collapsible>
        {/* nested submenu */}
        <SidebarGroup>
              <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                 <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                    <Link href='#  '>
                    <Projector />
                    See All Projects
                    </Link>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>  
                            <SidebarMenuSubButton asChild>
                                <Link href='/#'>
                                <Plus />
                                Add Project
                                </Link>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>  
                            <SidebarMenuSubButton asChild>
                                <Link href='/#'>
                                <Plus />
                                Add Category
                                </Link>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                 </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton>
                            <User2 />Paul Ajibade<ChevronUp className="ml-auto"/>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Account</DropdownMenuItem>
                            <DropdownMenuItem>Setting</DropdownMenuItem>
                            <DropdownMenuItem>Sign Out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar