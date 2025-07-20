
'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft, UploadCloud } from "lucide-react";
import { useAuth } from "@/hooks/useAuth.tsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const propertyFormSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters long." }),
  address: z.string().min(10, { message: "Please enter a valid address." }),
  price: z.coerce.number().min(1, { message: "Price must be greater than 0." }),
  bedrooms: z.coerce.number().optional(),
  bathrooms: z.coerce.number().optional(),
  area: z.coerce.number().min(10, { message: "Area must be at least 10 sqft." }),
  type: z.enum(["House", "Apartment", "Condo", "Plot"], { required_error: "You need to select a property type."}),
  status: z.enum(["For Sale", "For Rent"], { required_error: "You need to select a status."}),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }),
  features: z.string().min(3, { message: "Please list at least one feature."}),
  images: z.any().optional()
});

export default function AddPropertyPage() {
    const { isSeller, isLoggedIn } = useAuth();
    const router = useRouter();
    const [selectedType, setSelectedType] = useState<string | undefined>();

    useEffect(() => {
        if (!isLoggedIn || !isSeller) {
            router.push('/login');
        }
    }, [isLoggedIn, isSeller, router]);

    const form = useForm<z.infer<typeof propertyFormSchema>>({
        resolver: zodResolver(propertyFormSchema),
        defaultValues: {
            title: "",
            address: "",
            price: 0,
            bedrooms: 1,
            bathrooms: 1,
            area: 0,
            description: "",
            features: "",
        },
    });

    const handleTypeChange = (value: string) => {
        setSelectedType(value);
        form.setValue("type", value as "House" | "Apartment" | "Condo" | "Plot");
    }

    function onSubmit(values: z.infer<typeof propertyFormSchema>) {
        console.log(values)
        // In a real app, you would handle form submission here,
        // including image uploads and saving data to a database.
        alert("Property submitted successfully! (Check console for data)");
        router.push("/seller-dashboard");
    }

    if (!isLoggedIn || !isSeller) {
        return null; // Or a loading spinner
    }
    
    const showBedsAndBaths = selectedType && selectedType !== 'Plot';

    return (
        <div className="bg-secondary/40 min-h-[calc(100vh-4rem)]">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <Button asChild variant="ghost" className="mb-4">
                        <Link href="/seller-dashboard">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Dashboard
                        </Link>
                    </Button>
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-3xl font-headline">Add New Property</CardTitle>
                            <CardDescription>Fill in the details below to list your property on {'{Placeholder}'}.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Property Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g., Modern Villa in Karen" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="address"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g., 123 Karen Road, Nairobi" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="grid md:grid-cols-3 gap-8">
                                         <FormField
                                            control={form.control}
                                            name="type"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>Property Type</FormLabel>
                                                <Select onValueChange={handleTypeChange} defaultValue={field.value}>
                                                    <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a property type" />
                                                    </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                    <SelectItem value="House">House</SelectItem>
                                                    <SelectItem value="Apartment">Apartment</SelectItem>
                                                    <SelectItem value="Condo">Condo</SelectItem>
                                                    <SelectItem value="Plot">Plot</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="price"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Price (KES)</FormLabel>
                                                    <FormControl>
                                                        <Input type="number" placeholder="e.g., 180000000" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="area"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Area (sqft)</FormLabel>
                                                    <FormControl>
                                                        <Input type="number" placeholder="e.g., 4500" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-8">
                                        {showBedsAndBaths && (
                                            <>
                                                <FormField
                                                    control={form.control}
                                                    name="bedrooms"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Bedrooms</FormLabel>
                                                            <FormControl>
                                                                <Input type="number" min="1" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="bathrooms"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Bathrooms</FormLabel>
                                                            <FormControl>
                                                                <Input type="number" min="1" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </>
                                        )}
                                         <FormField
                                            control={form.control}
                                            name="status"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>Status</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a status" />
                                                    </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                    <SelectItem value="For Sale">For Sale</SelectItem>
                                                    <SelectItem value="For Rent">For Rent</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                     <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Description</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Tell us a little bit about the property"
                                                        className="resize-none"
                                                        rows={6}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="features"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Features</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g., Infinity Pool, Home Theater, Smart Home" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    Enter features separated by commas.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="images"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Property Images</FormLabel>
                                                <FormControl>
                                                    <div className="flex items-center justify-center w-full">
                                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-border border-dashed rounded-lg cursor-pointer bg-secondary/30 hover:bg-secondary/50">
                                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                <UploadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
                                                                <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                                <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                            </div>
                                                            <Input id="dropzone-file" type="file" className="hidden" multiple {...field} />
                                                        </label>
                                                    </div> 
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" size="lg">Submit Property</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
