"use client"

import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Calendar } from './ui/calendar'
import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { CalendarIcon } from 'lucide-react'
import {format} from "date-fns"
const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false);

  return (
    
    <div className=''>
        <h1 className='text-lg font-medium mb-6'>To-Do List</h1>
        <Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
     <Button className='w-full' variant="outline">
        <CalendarIcon />
        {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
  </PopoverTrigger>
  <PopoverContent className='p-0 w-auto'><Calendar
    mode="single"
    selected={date}
    onSelect={(date) => {setDate(date)
    setOpen(false)
    }}
    className="rounded-lg border"
  /></PopoverContent>
</Popover>
         
        {/* List */}
        <ScrollArea className='max-h-[400px] mt-4 overflow-y-auto'>
            <div className='flex flex-col gap-4'>
         <Card>
            <div className='flex items-center gap-4 p-2'>
                <Checkbox id='item1' checked  />
                    <label htmlFor="item1" className='text-sm '>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sed, aut eos nam reiciendis officiis iure.  
                    </label>
                
            </div>
         </Card>
         <Card>
            <div className='flex items-center gap-4 p-2'>
                <Checkbox id='item1'  />
                    <label htmlFor="item1" className='text-sm '>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sed, aut eos nam reiciendis officiis iure.  
                    </label>
                
            </div>
         </Card>
         <Card>
            <div className='flex items-center gap-4 p-2'>
                <Checkbox id='item1'  />
                    <label htmlFor="item1" className='text-sm '>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sed, aut eos nam reiciendis officiis iure.  
                    </label>
                
            </div>
         </Card>
         <Card>
            <div className='flex items-center gap-4 p-2'>
                <Checkbox id='item1'  />
                    <label htmlFor="item1" className='text-sm '>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sed, aut eos nam reiciendis officiis iure.  
                    </label>
                
            </div>
         </Card>
         <Card>
            <div className='flex items-center gap-4 p-2'>
                <Checkbox id='item1' checked  />
                    <label htmlFor="item1" className='text-sm '>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sed, aut eos nam reiciendis officiis iure.  
                    </label>
                
            </div>
         </Card>
         <Card>
            <div className='flex items-center gap-4 p-2'>
                <Checkbox id='item1'   />
                    <label htmlFor="item1" className='text-sm '>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sed, aut eos nam reiciendis officiis iure.  
                    </label>
                
            </div>
         </Card>
         </div>
        </ScrollArea>
    </div>
  )
}

export default TodoList