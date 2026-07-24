import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Kicker } from "@/components/ui/Kicker";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { DonateWidget } from "@/components/forms/DonateWidget";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, host a ward meeting, or support the campaign. This movement belongs to the people of Wajir County.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        kicker="Get Involved"
        title="This campaign belongs to Wajir."
        intro="Lend your time, your voice or your support. Every contribution — an hour of outreach or a shilling toward the cause — brings the county closer to the leadership it deserves."
      />

      {/* Volunteer */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:pt-4">
              <Kicker>Volunteer</Kicker>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                Add your hands to the movement.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">
                From door-to-door conversations to hosting a meeting in your ward,
                there&apos;s a place for everyone. Tell us how you&apos;d like to
                help and where you&apos;re based.
              </p>
              <ul className="mt-6 space-y-3 text-ink-600">
                {[
                  "Organise and mobilise in your ward",
                  "Represent the campaign at community events",
                  "Reach voters online and offline",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-flag-green" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <VolunteerForm />
          </div>
        </Container>
      </section>

      {/* Donate */}
      <section id="donate" className="scroll-mt-24 border-t border-line bg-sand-100 py-16 sm:py-24">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="lg:pt-4">
              <Kicker tone="ochre">Donate</Kicker>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                Power the campaign.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">
                Grassroots support keeps this movement independent and close to
                the people it serves. Give what you can, by M-Pesa, card or
                PayPal.
              </p>
              <div className="mt-6 rounded-xl border border-line bg-sand-50 p-5 text-sm leading-relaxed text-ink-600">
                <p className="font-semibold text-ink-800">A note on transparency</p>
                <p className="mt-1">
                  Political donations in Kenya are subject to campaign-finance
                  law. Before going live we&apos;ll confirm contribution limits,
                  disclosure requirements and the payment credentials to use.
                </p>
              </div>
            </div>
            <DonateWidget />
          </div>
        </Container>
      </section>
    </>
  );
}
