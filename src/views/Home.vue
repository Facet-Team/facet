<template>
    <v-app>
        <!-- Hero Section -->
        <section ref="heroSection">
            <v-container fluid class="hero-section pa-0" style="height: 100vh; position: relative;">
                <!-- Video Background (bottom layer) -->
                <LazyVideo :showLoading="false" playsinline autoplay muted loop class="hero-video"
                    style="position: absolute; min-width: 100%; min-height: 100%; width: auto; height: auto; z-index: 1;">
                    <source src="@/assets/videos_compressed/FACET Website Head.mp4" type="video/mp4">
                </LazyVideo>

                <!-- Grey Overlay (middle layer) -->
                <div
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(100, 100, 100, 0.4); z-index: 2;">
                </div>

                <!-- Left Side Navigation -->
                <div v-if="$vuetify.display.mdAndUp"
                    style="position: fixed; left: 20px; top: 50%; transform: translateY(-50%); z-index: 11;">
                    <v-btn v-for="(item, index) in navigationItems" :key="index" text block
                        class="mb-2 justify-start text-start" @click="scrollToSection(item.target)">
                        <v-icon left>{{ item.icon }}</v-icon>
                        {{ item.text }}
                    </v-btn>
                </div>

                <!-- Live Demo Button -->
                <div v-if="$vuetify.display.mdAndUp" class="hero-cta" @click="openLiveDemo">
                    <div class="gradient-mask"></div>
                    <div class="cta-content text-center">
                        <div style="width: 100%;">
                            <p class="cta-text">Play FACET<br />In Your Browser</p>
                        </div>
                        <div style="width: 100%;"><v-icon class="arrow-icon" large>mdi-arrow-right-bold</v-icon>
                        </div>
                    </div>
                </div>

                <!-- Hero Content Wrapper (top layer) -->
                <div style="position: relative; z-index: 3; height: 100%;">
                    <!-- Hero Content -->
                    <v-container class="d-flex flex-column justify-center align-center text-center"
                        style="height: 100%;" fluid>
                        <h1 style="font-size: 20vw; line-height: 0.95; user-select: none; -webkit-user-select: none; -ms-user-select: none;"
                            class="font-weight-light mb-4 text-white text-shadow">FACET
                        </h1>
                        <h2 class="text-h2 font-weight-light mb-4 text-white text-shadow"
                            style="font-size: 3.3vw !important;">
                            <span class="highlight-letter">F</span>orce-<span class="highlight-letter">A</span>daptive
                            <span class="highlight-letter">C</span>ontrol
                            via
                            Imp<span class="highlight-letter">e</span>dance<br /> Reference
                            <span class="highlight-letter">T</span>racking for
                            Legged Robots
                        </h2>
                        <p class="text-h4 font-weight-light mb-4 text-white text-shadow">CoRL 2025 Oral</p>
                        <div>
                            <v-row class="d-flex" style="flex-wrap: wrap;" justify="center">
                                <v-col v-for="(link, index) in headerLinks" :key="index" cols="auto">
                                    <v-btn color="primary" rounded :size="$vuetify.display.mdAndUp ? 'x-large' : 'default'" :href="link.href" target="_blank" text :disabled="link.disabled">
                                        <v-icon left>{{ link.icon }}</v-icon>
                                        {{ link.text }}
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </div>
                    </v-container>
                </div>

                <!-- Header -->
                 <v-fade-transition>
                    <div v-if="$vuetify.display.mdAndUp && !isHeroVisible" style="position: fixed; top: 20px; right: 20px; z-index: 10;">
                            <v-btn color="primary" class="mx-1" @click="openLiveDemo">
                                <v-icon left>mdi-play-circle</v-icon>
                                Play FACET
                            </v-btn>
                            <v-btn v-for="(link, index) in headerLinks" :key="index" :href="link.href" target="_blank" text :disabled="link.disabled"
                                class="mx-1">
                                <v-icon left>{{ link.icon }}</v-icon>
                                {{ link.text }}
                            </v-btn>
                    </div>
                </v-fade-transition>
            </v-container>
        </section>

        <!-- Introduction Section -->
        <v-container class="py-12" id="introduction">
            <v-row justify="center">
                <v-col cols="12" md="10">
                    <p class="text-h4 text-center mb-6">Introduction</p>

                    <v-row justify="center">
                        <v-col cols="12" md="12" lg="12">
                            <v-img src="@/assets/images/head.drawio.png" contain></v-img>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="12" lg="12">
                            <div class="text-body-1">
                                <p class="mb-4">
                                    Recent advances in reinforcement learning (RL) for robotics have shown
                                    incredibly agile movements such as parkour, dancing.
                                    However, most control policies overlook one crucial aspect:
                                    responding adaptively and compliantly to external forces during object manipulation
                                    and
                                    human
                                    interaction.
                                </p>
                                <p class="mb-4">
                                    <strong>FACET</strong> introduces a framework for force-adaptive control of legged
                                    robots.
                                    Inspired by impedance control, <strong>FACET</strong> trains a control policy to
                                    imitate
                                    a virtual mass-spring-damper system with RL,
                                    allowing fine-grained control under external forces by manipulating the virtual
                                    spring,
                                    and smoothly transition between compliant behavior and forceful actions.
                                </p>
                                <p class="mb-4">
                                    Such intuitive interface enables a wide range of applications. A high compliance
                                    allows the
                                    robot to
                                    be stopped or kinesthetically guided
                                    with ease (a), while a high stiffness allows the robot to exert large forces when
                                    pushing/pulling a
                                    payload (b). The framework applies to different morphologies and more complex
                                    configurations
                                    (c).
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="12" md="10" class="text-body-1">
                    <v-sheet color="rgb(210, 227, 252)" class="pa-4">
                        <p class="mb-4">
                            Key Capabilities:
                        </p>
                        <v-list bg-color="transparent">
                            <v-list-item>
                                <v-icon color="primary" class="mr-2">mdi-shield-check</v-icon>
                                <span>Enhanced Safety: Responds naturally to external forces, reducing collision impacts
                                    by
                                    up to
                                    80%</span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon color="primary" class="mr-2">mdi-arm-flex</v-icon>
                                <span>Adaptive Strength: Handles significant forces - from gentle guidance to pulling
                                    10kg
                                    loads</span>
                            </v-list-item>
                            <v-list-item>
                                <v-icon color="primary" class="mr-2">mdi-robot</v-icon>
                                <span>Versatile Application: Successfully implemented across quadrupeds, humanoids, and
                                    loco-manipulator
                                    systems</span>
                            </v-list-item>
                        </v-list>
                    </v-sheet>

                </v-col>
            </v-row>

        </v-container>
        <v-container class="py-12" id="online-demo">
            <v-row justify="center">
                <v-col cols="12" md="10" lg="8" xl="6" class="text-center">
                    <p class="text-h4 text-center mb-6">Online Demo</p>
                    <!-- Technical Summary Video -->
                    <v-sheet color="grey lighten-2" class="d-flex align-center justify-center mt-6">
                        <LazyVideo width="100%" height="100%" autoplay loop muted>
                            <source src="@/assets/videos_compressed/demo.mp4" type="video/mp4">
                        </LazyVideo>
                    </v-sheet>
                    <div class="mt-6 mb-4 text-center text-h6">
                        <strong>Experience FACET in Action! No installation required.</strong> <br/>
                        <strong v-if="!$vuetify.display.smAndUp">Larger screen recommended.</strong>
                    </div>
                    <v-btn color="primary" class="mx-auto" @click="openLiveDemo" large>
                        <v-icon left>mdi-play-circle</v-icon>
                        Play FACET in Your Browser
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>

        <!-- Method Section -->
        <v-container class="py-12 grey lighten-4" id="method">
            <v-row justify="center">
                <v-col cols="12" md="10">
                    <h2 class="text-h4 text-center mb-6">Method</h2>
                    <v-row>
                        <!-- Impedance Control Card -->
                        <v-col cols="12" sm="6" md="6">
                            <ExpansionCard v-model:expanded="expanded">
                                <template #media>
                                    <v-img src="@/assets/videos/imp_ctrl.gif" height="300px" contain
                                        class="grey lighten-3" />
                                </template>
                                <template #title>Impedance Control for Fixed-Base Manipulators</template>
                                <template #subtitle>
                                    <strong>FACET</strong> is inspired by impedance control. You control the robot by
                                    manipulating one end of
                                    a virtual spring. The robot behaves like a mass connected on the other end of the
                                    spring.
                                </template>
                                <p>Imagine controlling a robot like you're handling a mass connected to a spring: you
                                    drag
                                    around the
                                    other end of the spring, and the mass moves in response. When external forces are
                                    applied,
                                    the mass
                                    will move in the opposite direction of the force, and the spring will push back.</p>
                                <p>The input to an impedance controller is the specifications for a virtual
                                    mass-spring-damper
                                    system.
                                    The robot acts as if tethered to a virtual spring - it can flex and adapt when
                                    external
                                    forces are
                                    applied.</p>
                                <VueLatex expression="f_{spring} = K_p(x_{des} - x) + K_d(\dot{x}_{des} - \dot{x})"
                                    display-mode />
                                <p>where <VueLatex expression="K_p" /> is spring stiffness,
                                    <VueLatex expression="K_d" /> is damping, and
                                    <VueLatex expression="\mathbf{x}_{des}, \dot{\mathbf{x}}_{des}" /> are desired
                                    position and
                                    velocity.
                                </p>
                            </ExpansionCard>
                        </v-col>

                        <!-- Reference Model Tracking Card -->
                        <v-col cols="12" sm="6" md="6">
                            <ExpansionCard v-model:expanded="expanded">
                                <template #media>
                                    <v-img src="@/assets/images/method-left.drawio.png" height="300px" contain
                                        class="grey lighten-3" />
                                </template>
                                <template #title>Impedance Reference Model Tracking</template>
                                <template #subtitle>
                                    <strong>FACET</strong> uses a virtual mass-spring-damper system as
                                    a reference model to guide the robot's center of mass motion - the robot learns to
                                    imitate this reference model with reinforcement learning.
                                </template>
                                <p><strong>FACET</strong> leverages a virtual mass-spring-damper system as a reference
                                    model to
                                    guide
                                    the robot's center of mass (CoM) motion.</p>
                                <p>This model defines how the robot should respond to external forces - maintaining a
                                    "soft"
                                    tracking
                                    of its target position while naturally responding to forces.</p>
                                <VueLatex
                                    expression="m\ddot{\mathbf{x}}_{\text{ref}} = K_p(\mathbf{x}_{\text{des}} - \mathbf{x}_{\text{ref}}) + K_d(\dot{\mathbf{x}}_{\text{des}} - \dot{\mathbf{x}}_{\text{ref}}) + f_{\text{ext}}"
                                    display-mode />
                                <p>The robot learns to match this reference behavior through reinforcement learning,
                                    enabling
                                    control
                                    of the robot's CoM behavior by manipulating the virtual spring.</p>
                            </ExpansionCard>
                        </v-col>

                        <!-- Temporal Smoothing Card -->
                        <v-col cols="12" sm="6" md="6">
                            <ExpansionCard v-model:expanded="expanded">
                                <template #media>
                                    <v-img src="@/assets/images/method-right.drawio.png" height="300px" contain
                                        class="grey lighten-3" />
                                </template>
                                <template #title>Temporal Smoothing of Tracking Targets</template>
                                <template #subtitle><strong>FACET</strong> uses temporal smoothing to balance between
                                    open-loop and
                                    closed-loop
                                    tracking of the reference model.</template>
                                <p>Concretely, the reference state at time <VueLatex expression="t" /> is obtained by
                                    integrating from an
                                    initial time <VueLatex expression="t'" />:</p>
                                <VueLatex expression="\begin{cases} \mathbf{x}_{\text{ref}}(t) = \mathbf{x}_{\text{sim}}(t') + \int_{t'}^t \dot{\mathbf{x}}_{\text{ref}}(t)dt \\ \dot{\mathbf{x}}_{\text{ref}}(t) = \dot{\mathbf{x}}_{\text{sim}}(t') + \int_{t'}^t \ddot{\mathbf{x}}_{\text{ref}}(t)dt \end{cases}"
                                    display-mode />
                                <p>This approach addresses key challenges:
                                </p>
                                <ul class="pa-4">
                                    <li>Open-loop tracking (<VueLatex expression="t' = 0" />) follows ideal dynamics
                                        but ignores physical
                                        constraints, leading to diverging tracking targets that are hard to follow,
                                    </li>
                                    <li>closed-loop tracking (<VueLatex expression="t' = t - \Delta t" />) is adaptive
                                        but can be noisy.</li>
                                </ul>
                                <p class="mb-4">
                                    The final reward combines multiple tracking targets from different starting points
                                    <VueLatex expression="t'" />:
                                </p>
                                <VueLatex expression="r_t = \frac{1}{M} \sum_{t'} \exp(-||\mathbf{x}_{\text{sim}}(t) - \mathbf{x}^{t'}_{\text{ref}}(t)||^2_2) \\ + \exp(-||\dot{\mathbf{x}}_{\text{sim}}(t) - \dot{\mathbf{x}}^{t'}_{\text{ref}}(t)||^2_2)" display-mode />
                                <p>
                                    , where <VueLatex expression="t' \in \{t-8\Delta t, t-16\Delta t, t-32\Delta t\}" /> in our
                                    implementation,
                                    with <VueLatex expression="\Delta t = 0.02s" /> being the control interval.
                                </p>
                            </ExpansionCard>
                        </v-col>

                        <!-- Teacher-Student Training Card -->
                        <v-col cols="12" sm="6" md="6">
                            <ExpansionCard v-model:expanded="expanded">
                                <template #media>
                                    <v-img src="@/assets/images/teacher-student.drawio.png" height="300px" contain
                                        class="grey lighten-3" />
                                </template>
                                <template #title>Two-Stage Teacher-Student Training</template>
                                <template #subtitle>
                                    <strong>FACET</strong> uses a two-stage teacher-student training approach to
                                    facilitate learning and ensure successful sim2real transfer.
                                </template>
                                <p>In the first stage, we train a teacher policy <VueLatex
                                        expression="\pi^{\text{teacher}}" /> with
                                    access to privileged information alongside a state estimator <VueLatex
                                        expression="\mathcal{E}^{\text{est}}(o_{:t})" /> that predicts features from
                                    available
                                    sensors.</p>
                                <p>In the second stage, a student policy <VueLatex
                                        expression="\pi^{\text{student}}" /> is
                                    initialized from the teacher's parameters and fine-tuned using PPO to work with the
                                    estimated
                                    features.</p>
                            </ExpansionCard>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <!-- Simulation Section -->
        <v-container v-show="$vuetify.display.smAndUp" ref="simulationSection" fluid class="pa-0" id="simulation">
            <v-row no-gutters>
                <v-col cols="12">
                    <!-- Full-page video container -->
                    <div class="position-relative" style="height: 100vh;">
                        <!-- Video display -->
                        <div v-for="video in simulationVideos" :key="video.id">
                            <v-fade-transition>
                                <LazyVideo v-if="selectedSimVideo == video.id" width="100%" height="100%" autoplay loop
                                    muted style="object-fit: cover; position: absolute; top: 0; left: 0;">
                                    <source :src="video.src" type="video/mp4">
                                </LazyVideo>
                            </v-fade-transition>
                        </div>

                        <!-- Bottom Tab Navigation -->
                        <div class="position-absolute d-flex justify-center"
                            style="bottom: 40px; left: 0; right: 0; z-index: 1;">
                            <v-btn-toggle v-model="selectedSimVideo" mandatory rounded
                                background-color="rgba(0, 0, 0, 0.5)" class="elevation-4">
                                <v-btn v-for="video in simulationVideos" :key="video.id" :value="video.id" class="px-6">
                                    <span>{{ video.title }}</span>
                                </v-btn>
                            </v-btn-toggle>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <!-- Real-World Results Section -->
        <v-container class="py-12" id="real-world">
            <v-row justify="center">
                <v-col cols="12" md="10">
                    <h2 class="text-h4 text-center mb-6">Real-World Results</h2>
                    <v-row v-for="(row, rowIdx) in realWorldRows" :key="rowIdx">
                        <v-col v-for="(item, idx) in row" :key="idx" cols="12" md="6">
                            <h3 class="text-h6">{{ item.title }}</h3>
                            <v-sheet color="grey lighten-2" class="d-flex align-center justify-center mb-4">
                                <LazyVideo width="100%" height="100%" autoplay loop muted>
                                    <source :src="item.src" type="video/mp4">
                                </LazyVideo>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <!-- Ablation Study Section -->
        <v-container class="py-12 grey lighten-4" id="ablation">
            <v-row justify="center">
                <v-col cols="12" md="10">
                    <h2 class="text-h4 text-center mb-6">Ablation Study</h2>
                    <v-row>
                        <v-col cols="12" sm="12" md="6" lg="4">
                            <v-card elevation="2" class="pa-4 mb-4 h-100">
                                <h3 class="text-h6 mb-3">Success Rate vs Peak Impact Force</h3>
                                <v-img src="@/assets/images/survival.png" contain class="mb-4"></v-img>
                                <p class="text-body-2">
                                    FACET demonstrates superior robustness to large impulses compared to baseline
                                    policies
                                    trained with
                                    velocity tracking (vanilla) and with random impulse perturbations (robust). The
                                    success rate
                                    remains
                                    high even under significant impact forces.
                                </p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="4">
                            <v-card elevation="2" class="pa-4 mb-4 h-100">
                                <h3 class="text-h6 mb-3">Planar Trajectory Upon Impulse</h3>
                                <v-img src="@/assets/images/traj_impulse.png" contain class="mb-4"></v-img>
                                <p class="text-body-2">
                                    Planar (xy) trajectory of robot CoM under a 100 Ns lateral impulse with a 400 N peak
                                    force.
                                    FACET can compliantly follow the impulse, adapting its velocity to keep balance,
                                    unlike the
                                    stiffer responses or failures of the baselines.
                                </p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="4">
                            <v-card elevation="2" class="pa-4 mb-4 h-100">
                                <h3 class="text-h6 mb-3">Distribution of Collision Impulse</h3>
                                <v-img src="@/assets/images/impulse_dist.png" contain class="mb-4"></v-img>
                                <p class="text-body-2">
                                    Distribution of collision impulse when the robot walks into a virtual wall. FACET
                                    achieves a
                                    significantly lower collision impulse, and this can be modulated by adjusting the
                                    impedance
                                    parameter Kp, indicating enhanced safety during physical interaction.
                                </p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <!-- <v-card elevation="2" class="pa-4 mt-6">
            <p class="text-body-1">
              Our method introduces controllable compliance into the policy, allowing it to follow instead of 
              counteract external forces when the forces are too large. We compare our method (FACET) with two 
              baselines: (1) vanilla: a locomotion policy trained with velocity tracking reward, and (2) robust: 
              trained additionally with random impulse domain randomizations. The distribution of perturbations 
              applied during training for FACET and robust are identical (random impulse lasting 0.4~0.6s, 
              peaking 80~200N). Safety is a critical aspect when the robot operates in cluttered environments, 
              where intense collisions can damage both the subject and the robot itself. Our approach enables 
              more compliant behavior upon collision by using small Kp and Kd.
            </p>
          </v-card> -->
                </v-col>
            </v-row>
        </v-container>

        <!-- Team Section -->
        <v-container class="py-12 grey lighten-4" id="team">
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <h2 class="text-h4 text-center mb-6">Our Team</h2>
                    <v-row justify="center">
                        <v-col v-for="(member, idx) in teamMembers" :key="idx" cols="12" sm="4" class="text-center">
                            <a :href="member.link" target="_blank" class="text-decoration-none">
                                <v-avatar size="120" color="grey lighten-2" class="mb-4">
                                    <!-- <v-icon size="64" color="grey darken-2">mdi-account</v-icon> -->
                                    <v-img :src="member.avatar" contain></v-img>
                                </v-avatar>
                                <h3 class="text-h6">{{ member.name }}<span v-if="member.star"> *</span></h3>
                                <p class="caption" v-html="member.school"></p>
                            </a>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <!-- Footer -->
        <v-footer padless>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" md="8" class="text-center">
                        <p class="mb-4">
                            © 2025 The FACET Team, Tsinghua University.<br/>
                            Built with <a href="https://vuetifyjs.com/en/" target="_blank">Vuetify</a>, <a href="https://github.com/Axellwppr/mujoco_wasm_332" target="_blank">MuJoCo WASM</a>, and <a href="https://www.npmjs.com/package/onnxruntime-web" target="_blank">ONNX Runtime Web</a>. <br/>
                            <a href="https://github.com/Facet-Team/facet" target="_blank">Website content</a> licensed under MIT License. Third-party libraries retain their original licenses.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
import LazyVideo from '@/components/LazyVideo.vue'
import { VueLatex } from 'vatex'
export default {
    name: 'App',
    components: { LazyVideo, VueLatex },
    data() {
        return {
            isHeroVisible: true,
            navigationItems: [
                { text: ' Introduction', icon: 'mdi-information', target: 'introduction' },
                { text: ' Method', icon: 'mdi-cog', target: 'method' },
                { text: ' Simulation', icon: 'mdi-video', target: 'simulation' },
                { text: ' Results', icon: 'mdi-chart-bar', target: 'real-world' },
                { text: ' Ablation', icon: 'mdi-microscope', target: 'ablation' },
                { text: ' Team', icon: 'mdi-account-group', target: 'team' }
            ],
            simulationVideos: [
                { id: 1, src: new URL('@/assets/videos_compressed/FACET B1Z1 Demo (with caption).mp4', import.meta.url).href, title: 'B1+Z1 Demo' },
                { id: 2, src: new URL('@/assets/videos_compressed/g1_impulse_multiple.mp4', import.meta.url).href, title: 'G1 Impulse' },
                { id: 3, src: new URL('@/assets/videos_compressed/FACET Go2 Training Dist (with caption).mp4', import.meta.url).href, title: 'Go2 Training' },
                { id: 4, src: new URL('@/assets/videos_compressed/b1z1_training.mp4', import.meta.url).href, title: 'B1+Z1 Training' }
            ],
            headerLinks: [
                // { text: 'PAPER', icon: 'mdi-file-pdf-box', href: 'https://github.com' },
                { text: 'ARXIV', icon: 'mdi-file-document', href: 'https://arxiv.org/abs/2505.06883', disabled: false },
                { text: 'VIDEO', icon: 'mdi-video', href: 'https://www.youtube.com/watch?v=T-hyKhv44yg&list=PLrCqEKTrDjGIK4JGnYhJh7SKP152IDDaK&index=2', disabled: false },
                { text: 'CODE', icon: 'mdi-github', href: 'https://github.com/btx0424/active-adaptation', disabled: false}
            ],
            show_step: 1,
            selectedSimVideo: 1,
            isSnapping: false,
            expanded: false,
            scrollTimeout: null,
            observer: null,
            teamMembers: [
                { name: 'Botian Xu', school: 'Tsinghua University', link: 'https://btx0424.github.io/', star: true, avatar: new URL('@/assets/images/team/botian.jpg', import.meta.url).href },
                { name: 'Haoyang Weng', school: 'Tsinghua University', link: 'https://egalahad.github.io/', star: true, avatar: new URL('@/assets/images/team/haoyang.jpg', import.meta.url).href },
                { name: 'Qingzhou Lu', school: 'Tsinghua University', link: 'https://me.axell.top/', star: true, avatar: new URL('@/assets/images/team/qingzhou.png', import.meta.url).href },
                { name: 'Yang Gao', school: 'Tsinghua University<br/>Shanghai Qizhi Institute<br/>Shanghai AI Lab', link: 'https://yang-gao.weebly.com/', star: false, avatar: new URL('@/assets/images/team/yanggao.jpg', import.meta.url).href },
                { name: 'Huazhe Xu', school: 'Tsinghua University<br/>Shanghai Qizhi Institute<br/>Shanghai AI Lab', link: 'http://hxu.rocks/', star: false, avatar: new URL('@/assets/images/team/huazhexu.png', import.meta.url).href },
            ],
            realWorldRows: [
                [
                    { title: 'Compliant to Perturb and Pushes (FACET Policy)', src: new URL('@/assets/videos_compressed/facet-push-compliant.mp4', import.meta.url).href },
                    { title: 'Stiff Response of Baselines (Robust Policy)', src: new URL('@/assets/videos_compressed/velocity-push-stiff.mp4', import.meta.url).href },
                ],
                [
                    { title: 'Robust to Large Forces (0.3x)', src: new URL('@/assets/videos_compressed/facet-side_pull-success-0.3x.mp4', import.meta.url).href },
                    { title: 'Failures of Baselines (0.3x)', src: new URL('@/assets/videos_compressed/default-side_pull-fail-0.3x.mp4', import.meta.url).href },
                ],
                [
                    { title: 'Compliant Following', src: new URL('@/assets/videos_compressed/compliant_following.mp4', import.meta.url).href },
                    { title: 'Large Force Pulling', src: new URL('@/assets/videos_compressed/large_force_pulling.mp4', import.meta.url).href },
                ],
            ],
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        window.addEventListener('wheel', this.preventScroll, { passive: false });
        window.addEventListener('touchmove', this.preventScroll, { passive: false });

        // Set up IntersectionObserver to watch hero section visibility
        this.observer = new IntersectionObserver(
            ([entry]) => {
                this.isHeroVisible = entry.isIntersecting;
                console.log(this.isHeroVisible);
            },
            { threshold: 0.1 }
        );
        this.observer.observe(this.$refs.heroSection);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('wheel', this.preventScroll);
        window.removeEventListener('touchmove', this.preventScroll);

        // Clean up the observer
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        openLiveDemo() {
            this.$router.push('/demo');
        },
        scrollToSection(target) {
            const element = document.getElementById(target);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        },
        preventScroll(e) {
            if (this.isSnapping) {
                e.preventDefault();
            }
        },
        handleScroll() {
            if (this.scrollTimeout) {
                clearTimeout(this.scrollTimeout);
            }
            this.scrollTimeout = setTimeout(() => {
                this.checkVisibilityAndSnap();
            }, 1000);
        },
        checkVisibilityAndSnap() {
            if (this.isSnapping) return;

            const rect = this.$refs.simulationSection.$el.getBoundingClientRect();
            const vh = window.innerHeight;

            const visibleHeight = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
            const totalHeight = rect.height;
            const visibleRatio = visibleHeight / totalHeight;

            if (visibleRatio >= 0.75) {
                this.doSnap();
            }
        },
        doSnap() {
            this.isSnapping = true;
            this.$refs.simulationSection.$el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            setTimeout(() => {
                this.isSnapping = false;
            }, 600);
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');

.position-relative {
    position: relative;
}

.position-absolute {
    position: absolute;
}

.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

/* MainLayout styles */
.hero-section {
    overflow: hidden;
    background-color: #000; 
}

:root {
    --highlight-color: #4285F4;
}

.highlight-letter {
    color: var(--highlight-color);
}
</style>

<!-- Live Demo Button -->
<style>
/* CTA 外层容器，覆盖在最右侧 */
.hero-cta {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 250px;
    /* 根据需要调整宽度 */
    height: 100%;
    cursor: pointer;
    z-index: 8;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 渐变蒙版：从右侧深色到左侧透明 */
.gradient-mask {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.6), transparent);
    pointer-events: none;
}

/* 箭头和文字的容器，保证在蒙版之上 */
.cta-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 9;
}

/* 箭头的动画提示 */
.arrow-icon {
    color: #fff;
    animation: moveArrow 1.5s infinite;
}

/* 文案样式 */
.cta-text {
    color: #fff;
    margin-left: 8px;
    font-size: 1.2rem;
    font-weight: 500;
}

/* 简单来回动画 */
@keyframes moveArrow {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(10px);
    }
}
</style>

<style>
.text-decoration-none {
    text-decoration: none;
    color: inherit;
}
</style>
