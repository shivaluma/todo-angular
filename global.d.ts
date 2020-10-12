interface Todo {
    title: string;
    description: string;
}


interface TodoItem extends Todo {
    status: "todo" | "in-progress" | "done" | "archived"
}