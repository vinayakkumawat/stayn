"use client"

import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { IconSearch } from '@tabler/icons-react'

const searchSchema = z.object({
    location: z.string().min(2).max(50),
    dates: z.object({
        from: z.date(),
        to: z.date(),
    }),
    adults: z.string().min(1, { message: "At least one adult is required." }).max(12, { message: "Maximum of 12 adults." }),
    children: z.string().min(0).max(12, { message: "Maximum of 12 children." }),
    rooms: z.string().min(1, { message: "At least one room is required." }),
    keywords: z.string().min(2).max(50),
})

const SearchForm = () => {

    const router = useRouter()

    const search = useForm<z.infer<typeof searchSchema>>({
        resolver: zodResolver(searchSchema),
        defaultValues: {
            location: "",
            dates: {
                from: undefined,
                to: undefined,
            },
            adults: "1",
            children: "0",
            rooms: "1",
            keywords: "",
        },
    })

    function onSubmit(values: z.infer<typeof searchSchema>) {
        console.log(values)

        const checkin_monthday = values.dates.from.getDate().toString();
        const checkin_month = (values.dates.from.getMonth() + 1).toString();
        const checkin_year = values.dates.from.getFullYear().toString();
        const checkout_monthday = values.dates.to.getDate().toString();
        const checkout_month = (values.dates.to.getMonth() + 1).toString();
        const checkout_year = values.dates.to.getFullYear().toString();

        const checkin = `${checkin_year}-${checkin_month}-${checkin_monthday}`;
        const checkout = `${checkout_year}-${checkout_month}-${checkout_monthday}`;

        // const url = new URL("https://www.booking.com/searchresults.html");
        // url.searchParams.set("ss", values.location);
        // url.searchParams.set("group_adults", values.adults);
        // url.searchParams.set("group_children", values.children);
        // url.searchParams.set("no_rooms", values.rooms);
        // url.searchParams.set("checkin", checkin);
        // url.searchParams.set("checkout", checkout);
        // url.searchParams.set("keywords", values.keywords);

        // router.push(`/search/airbnb?url=${url.href}`);
    }

    return (
        <Form {...search}>
            <form onSubmit={search.handleSubmit(onSubmit)} className="flex justify-center items-center gap-2">
                <FormField
                    control={search.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem className='flex flex-col'>
                            <FormLabel>Location</FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input className='w-52 rounded-full' placeholder="London, UK" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={search.control}
                    name="dates"
                    render={({ field }) => (
                        <FormItem className='flex flex-col'>
                            <FormLabel>Dates</FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Popover>
                                    <PopoverTrigger asChild>

                                        <Button
                                            id="date"
                                            name="dates"
                                            variant={"outline"}
                                            className={cn(
                                                "w-40 justify-start text-left font-normal",
                                                !field.value.from && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-3 h-4 w-4 opacity-50" />
                                            {field.value?.from ? (
                                                field.value?.to ? (
                                                    <>
                                                        {format(field.value?.from, "LLL dd")} -{" "}
                                                        {format(field.value?.to, "LLL dd")}
                                                    </>
                                                ) : (
                                                    format(field.value?.from, "LLL dd")
                                                )
                                            ) : (
                                                <span>Select</span>
                                            )}
                                        </Button>

                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            initialFocus
                                            mode="range"
                                            selected={field.value}
                                            defaultMonth={field.value.from}
                                            onSelect={field.onChange}
                                            numberOfMonths={1}
                                            disabled={(date) =>
                                                date < new Date(new Date().setHours(0, 0, 0, 0))
                                            }
                                        />
                                    </PopoverContent>
                                </Popover>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={search.control}
                    name="adults"
                    render={({ field }) => (
                        <FormItem className='flex flex-col'>
                            <FormLabel className="">Adults</FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input className='w-20 rounded-full' type="number" placeholder="Adults" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={search.control}
                    name="children"
                    render={({ field }) => (
                        <FormItem className='flex flex-col'>
                            <FormLabel className="">Children</FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input className='w-20 rounded-full' type="number" placeholder="Children" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={search.control}
                    name="rooms"
                    render={({ field }) => (
                        <FormItem className='flex flex-col'>
                            <FormLabel className="">Rooms</FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input className='w-20 rounded-full' type="number" placeholder="Rooms" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={search.control}
                    name="keywords"
                    render={({ field }) => (
                        <FormItem className='flex flex-col'>
                            <FormLabel>{"Keywords (Optional)"}</FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input className='w-52 rounded-full' placeholder="Wedding, Garden..." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div className='flex flex-col justify-end font-bold'>
                    <Button className='' size={'icon'} type="submit"><IconSearch className='w-6 h-6' /></Button>
                </div>
            </form>
        </Form>
    )
}

export default SearchForm