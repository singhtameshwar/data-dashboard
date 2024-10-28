"use client";
import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const rawData = {
    user: [
        {
            email: "user@example.com",
            password: "user",
        },
        {
            email: "mohit@email.com",
            password: "mohit",
        },
        {
            email: "manish@email.com",
            password: "manish",
        },
        {
            email: "rahul@email.com",
            password: "rahul",
        },
    ],
    admin: [
        {
            email: "admin@example.com",
            password: "admin",
        },
    ],
};

const Home = () => {
    const router = useRouter();

    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [adminEmail, setAdminEmail] = useState<string>("");
    const [adminPassword, setAdminPassword] = useState<string>("");

    const handleUserLogin = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        // Check if the user exists in rawData
        const userExists = rawData.user.some(
            user => user.email === userEmail && user.password === userPassword
        );

        if (userExists) {
            router.push("/dashboard"); // Redirect to the user dashboard
        } else {
            alert("Invalid user credentials");
        }
    };

    const handleAdminLogin = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        // Check if the admin exists in rawData
        const adminExists = rawData.admin.some(
            admin => admin.email === adminEmail && admin.password === adminPassword
        );

        if (adminExists) {
            router.push("/dashboard"); // Redirect to the admin dashboard
        } else {
            alert("Invalid admin credentials");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Choose your login type</CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="user" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="user">User</TabsTrigger>
                            <TabsTrigger value="admin">Admin</TabsTrigger>
                        </TabsList>
                        <TabsContent value="user">
                            <form onSubmit={handleUserLogin}>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="user-email">Email</Label>
                                        <Input
                                            id="user-email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={userEmail}
                                            onChange={(e) => setUserEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="user-password">Password</Label>
                                        <Input
                                            id="user-password"
                                            type="password"
                                            placeholder="Enter your password"
                                            value={userPassword}
                                            onChange={(e) => setUserPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Login as User
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>
                        <TabsContent value="admin">
                            <form onSubmit={handleAdminLogin}>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="admin-email">Email</Label>
                                        <Input
                                            id="admin-email"
                                            type="email"
                                            placeholder="Enter admin email"
                                            value={adminEmail}
                                            onChange={(e) => setAdminEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="admin-password">Password</Label>
                                        <Input
                                            id="admin-password"
                                            type="password"
                                            placeholder="Enter admin password"
                                            value={adminPassword}
                                            onChange={(e) => setAdminPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Login as Admin
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>
                    </Tabs>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-gray-500">© 2024 Your Company Name</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Home;
