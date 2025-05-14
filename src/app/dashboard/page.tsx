import DashboardNavbar from "@/components/dashboard-navbar";
import { InfoIcon, UserCircle, MailIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { createClient } from "../../../supabase/server";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <>
      <DashboardNavbar />
      <main className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
          {/* Header Section */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="bg-secondary/50 text-sm p-3 px-4 rounded-lg text-muted-foreground flex gap-2 items-center">
              <InfoIcon size="14" />
              <span>
                This is a protected page only visible to authenticated users
              </span>
            </div>
          </header>

          {/* Work in Progress Section */}
          <section className="bg-card rounded-xl p-6 border shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <UserCircle size={48} className="text-primary" />
              <div>
                <h2 className="font-semibold text-xl">
                  Dashboard Under Construction
                </h2>
                <p className="text-sm text-muted-foreground">
                  We're working on building your employer dashboard
                </p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <h3 className="text-lg font-medium mb-4">Coming Soon!</h3>
              <p className="mb-6">
                Our team is currently building the employer dashboard with
                features for job posting, candidate matching, and interview
                scheduling.
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <MailIcon size={16} />
                <span>
                  For early access, contact us at: xyz@peopleintech.com
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
