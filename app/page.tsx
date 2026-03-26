export default function ZeniqWebsite() {
  const features = [
    {
      title: "Markerless Multi-Camera Capture",
      desc: "Extract 3D motion capture from synchronized video feeds using regular webcams. No markers, no suits, and no bulky hardware required.",
      icon: "◎",
    },
    {
      title: "Real-Time Live Motion Data",
      desc: "Stream motion data in real time for virtual characters, live performances, and interactive VTuber workflows with low-friction setup.",
      icon: "↗",
    },
    {
      title: "Clean BVH Export",
      desc: "Record performances and export to BVH, the standard motion capture format used in animation and 3D production pipelines.",
      icon: "▤",
    },
  ];

  const workflow = [
    {
      title: "Download",
      text: "Download the ZENIQ app package, extract it, install the required libraries and environment, then launch ZENIQ.bat.",
    },
    {
      title: "Connect",
      text: "Choose the webcams you want to use, connect available cameras from the interface, and customize tracking options like hands or face mesh.",
    },
    {
      title: "Capture",
      text: "Start recording instantly, stream motion in real time, and export footage when you're done.",
    },
  ];

  const useCases = [
    "VTuber livestreaming",
    "Indie game animation",
    "Character performance capture",
    "Previs and prototyping",
    "Student and creator projects",
    "Studio motion recording",
  ];

  const trackingOptions = [
    "Body tracking",
    "Optional hand tracking",
    "Optional face mesh",
    "Multi-camera angle sync",
    "Real-time data feed",
    "Affordable webcam support",
  ];

  const support = [
    {
      title: "Video Tutorials",
      text: "A visual documentation system that helps users install, set up, and start capturing quickly.",
    },
    {
      title: "Discord Community",
      text: "Direct contact with the development team, setup advice from users, and a place to share workflows and results.",
    },
    {
      title: "Priority SLA",
      text: "Paid plans include priority technical support, with Pro Studio users receiving responses within 24 hours.",
    },
  ];

  const pricing = [
    {
      name: "Trial",
      price: "Free",
      sub: "Try ZENIQ with minimal risk",
      points: [
        "1 webcam only",
        "1 week access",
        "Maximum total recording time: 1 minute",
        "Great for testing the workflow",
      ],
      highlight: false,
    },
    {
      name: "Creator",
      price: "$12/mo",
      sub: "For creators, students, and indie teams",
      points: [
        "Up to 3 webcams",
        "Live Link for Unreal Engine 5",
        "Clean file export",
        "Affordable entry-level pricing",
      ],
      highlight: true,
    },
    {
      name: "Pro Studio",
      price: "$40/mo",
      sub: "For advanced users and studios",
      points: [
        "Unlimited webcams",
        "Raw data export",
        "Priority support",
        "24-hour technical response target",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="ZENIQ logo"
              className="h-12 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
          </div>

          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#workflow" className="transition hover:text-white">How it works</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#support" className="transition hover:text-white">Support</a>
          </nav>

          <a
            href="#download"
            className="rounded-2xl border border-white/10 bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
          >
            Download ZENIQ
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_34%)]" />
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                AI motion capture from regular webcams
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                Professional 3D mocap without suits, markers, or expensive hardware.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                ZENIQ extracts 3D motion capture from video using everyday webcams. Connect multiple cameras, track a real performer in real time, livestream virtual characters, and export animation-ready motion data with a clean, minimalist workflow.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#pricing"
                  className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-neutral-950 shadow-2xl transition hover:scale-[1.02]"
                >
                  See Pricing
                </a>
                <a
                  href="#features"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ["Markerless", "No suits or markers"],
                  ["Multi-Camera", "Use multiple webcams"],
                  ["Real-Time", "For live characters"],
                  ["BVH Export", "Animation-ready output"],
                ].map(([title, sub]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-lg font-semibold text-white">{title}</div>
                    <div className="mt-1 text-sm text-white/55">{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-center">
              <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/50">Active Session</p>
                      <h2 className="text-xl font-semibold">Live Performer Capture</h2>
                    </div>
                    <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">
                      Real-Time
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4">
                      <div className="relative h-72 overflow-hidden rounded-2xl bg-neutral-950">
                        <div className="absolute left-1/2 top-8 h-10 w-10 -translate-x-1/2 rounded-full border border-white/40 bg-white/10" />
                        <div className="absolute left-1/2 top-16 h-20 w-[2px] -translate-x-1/2 bg-white/40" />
                        <div className="absolute left-[38%] top-24 h-[2px] w-24 bg-white/40 rotate-[18deg] origin-right" />
                        <div className="absolute right-[38%] top-24 h-[2px] w-24 bg-white/40 -rotate-[18deg] origin-left" />
                        <div className="absolute left-[47%] top-36 h-24 w-[2px] bg-white/40 rotate-[12deg] origin-top" />
                        <div className="absolute right-[47%] top-36 h-24 w-[2px] bg-white/40 -rotate-[12deg] origin-top" />
                        <div className="absolute left-[43%] top-41 h-24 w-[2px] bg-white/70 rotate-[28deg] origin-top" />
                        <div className="absolute right-[43%] top-41 h-24 w-[2px] bg-white/70 -rotate-[28deg] origin-top" />
                        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">Cam 1</div>
                        <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">Cam 2</div>
                        <div className="absolute left-1/2 bottom-5 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">Cam 3</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-sm text-white/50">Tracking Pipeline</p>
                        <div className="mt-3 space-y-2 text-sm text-white/75">
                          <div className="flex justify-between"><span>Skeleton Detection</span><span>On</span></div>
                          <div className="flex justify-between"><span>Hand Tracking</span><span>Optional</span></div>
                          <div className="flex justify-between"><span>Face Mesh</span><span>Optional</span></div>
                          <div className="flex justify-between"><span>BVH Export</span><span>Ready</span></div>
                        </div>
                      </div>
                      <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-sm text-white/50">Best Fit</p>
                        <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
                          {['VTubers', 'Animators', 'Students', 'Studios'].map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-sm text-white/50">Core Advantage</p>
                        <p className="mt-2 text-sm leading-6 text-white/72">
                          Real-time, markerless, multi-camera motion capture at a price creators can actually afford.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">Why ZENIQ</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Motion capture that feels simple, not intimidating.
            </h2>
            <p className="mt-4 text-lg text-white/65">
              ZENIQ is built for people who want real results without a studio-sized budget. It turns affordable webcams into a practical mocap system for livestreaming, animation, and creator workflows.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/45">Built for real users</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  From bedroom desk setup to studio production.
                </h2>
                <p className="mt-4 text-lg text-white/65">
                  No large capture stage. No tight-fitting sensor suits. No complicated equipment chain. Just your cameras, your performer, and a streamlined UI designed around minimalism.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {trackingOptions.map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-5 text-sm text-white/78">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">How it works</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                A clear setup flow with minimal friction.
              </h2>
              <p className="mt-4 text-lg text-white/65">
                ZENIQ keeps the process lightweight: install, connect cameras, record, and export. Advanced features are there when you need them, but the interface stays approachable.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {workflow.map((step, i) => (
                <div key={step.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <div className="mb-5 text-sm text-white/40">0{i + 1}</div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-white/65">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">Use cases</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                For VTubers, animators, creators, and studios.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-white/65">
                Whether you want to animate a digital character, stream a live avatar, prototype scenes, or record character motion for production, ZENIQ gives you a cost-efficient entry point into real-time mocap.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {useCases.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">Freemium pricing</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Accessible plans designed to grow with your workflow.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-white/65">
              ZENIQ uses affordable tiered pricing to attract creators with zero-friction entry, then scale up for professionals and studios. Pricing can be updated later, but the structure is already built in.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-[1.9rem] border p-8 shadow-2xl ${
                  tier.highlight
                    ? 'border-white bg-white text-neutral-950'
                    : 'border-white/10 bg-white/5 text-white'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{tier.name}</h3>
                    <p className={`mt-2 text-sm ${tier.highlight ? 'text-neutral-600' : 'text-white/55'}`}>
                      {tier.sub}
                    </p>
                  </div>
                  {tier.highlight && (
                    <span className="rounded-full bg-neutral-950 px-3 py-1 text-xs text-white">Best value</span>
                  )}
                </div>

                <div className="mt-8 text-4xl font-semibold">{tier.price}</div>
                <ul className={`mt-8 space-y-3 text-sm ${tier.highlight ? 'text-neutral-700' : 'text-white/70'}`}>
                  {tier.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>

                <a
                  href="#download"
                  className={`mt-8 inline-block rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                    tier.highlight
                      ? 'bg-neutral-950 text-white hover:opacity-90'
                      : 'border border-white/15 bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  Choose {tier.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="support" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">Support</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Guidance for new users, fast help for serious projects.
              </h2>
              <p className="mt-4 text-lg text-white/65">
                ZENIQ supports users through tutorials, community help, and direct technical response channels so setup stays manageable even for first-time mocap users.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {support.map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-neutral-900 p-8">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/65">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center shadow-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">Get started</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Launch markerless mocap from the webcams you already own.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
              Download the app, install the required environment, run ZENIQ.bat, connect your cameras, and start capturing. Clean interface, powerful features, and a pricing model built to bring more creators into mocap.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02]"
              >
                Download Trial
              </a>
              <a
                href="#support"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Setup Help
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
