import { TodosContainer } from "@containers/*"

export const privateRouter = (userRole: string) => [{
    path: "/todos",
    component: TodosContainer,
    exact: true,
    icon: "",
    title: "",
    acl: ["ADMIN", "MANAGER"]
},
{
    path: "/users",
    component: null,
    exact: true,
    icon: "",
    title: "",
    acl: ["ADMIN"]
}
].filter(router => router.acl.includes(userRole) || !router.acl.length)