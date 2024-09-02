"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { UserRole } from "@prisma/client";

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast({
          variant: "destructive",
          title: data.error,
          description: "You are allow for call api!",
        });
      }
      if (data.success) {
        toast({
          variant: "default",
          title: data.success,
          description: "You are allow for call api!",
        });
      }
    });
  };

  const onApiRouteClick = () => {
    fetch("/api/admin").then((res) => {
      if (res.ok) {
        toast({
          variant: "default",
          title: "Okay",
          description: "You are allow for call api!",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Forbidden",
          description: "You are not allow for call api!",
        });
      }
    });
  };
  return (
    <Card className="md:w-[600px] w-full mt-24">
      <CardHeader className="text-2xl font-semibold text-center">
        <p>🔑 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowRole={UserRole.ADMIN}>
          <FormSuccess message="You are allow to see this content!" />
        </RoleGate>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
