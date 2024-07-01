const zod = require("zod")

const createTodo = zod.object({
    title:zod.string().min(6),
    description:zod.string().min(6),
})

const updateTodo = zod.object({
    id:zod.string()
})

// module.exports = {createTodo:createTodo,updateTodo:updateTodo}
module.exports = {createTodo,updateTodo}

