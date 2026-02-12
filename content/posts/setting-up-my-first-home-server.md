---
title: "Setting up a Ubuntu LTS homeserver"
date: "2026-02-12"
description: "My journey with setting up my first ever homeserver"
tags: ["server", "linux", "ubuntu"]
---
## Building my own homeserver

When I first decided to convert an old PC into a dedicated Minecraft server, I had no idea how much I'd learn along the way. What started as a simple "wouldn't it be cool to host my own server?" has turned into a full-fledged homeserver setup running multiple services. Here's my story.

## The beginning

It all started with a blank hard drive and Ubuntu Server 24.04 LTS. I wiped the machine clean, installed a minimal Linux environment, and suddenly I had a headless server with no GUI. This was my first real challenge—configuring networking from the command line.

Getting the network interface up and running took some trial and error. I had to manually configure `/etc/netplan/01-netcfg.yaml` to give it a static IP. Then came SSH;  a technology I'd really only used in one or two university courses. Setting up SSH key authentication was really easy in the end and now I had a secure way to connect to my server.

## The Minecraft server

Installing the Minecraft Paper server was straightforward—Java, a JAR file, and systemd service to auto-start it. I allocated 10GB of RAM, set up the EULA, and suddenly I had a Minecraft server running on my home network.

But then reality hit: my ISP blocks port 25565.

I struggled with port forwarding, router configurations, and firewall rules. Nothing worked. I even configured UFW with all the right rules, but the ISP's residential internet connection just wouldn't allow inbound connections on common gaming ports. This was frustrating, but it taught me about network architecture and ISP limitations that I'd never considered before.

Then I discovered Playit, a tunnel service that bypasses ISP restrictions. It was like finding the cheat code I didn't know I needed. Suddenly, players could connect via an IP provided through Playit, and my server was accessible to the world (well, to my friends and members of our student guild).


## Turning my server into a place to store media

While I had compute power sitting around, I figured I might as well use it. I set up Jellyfin, a self-hosted media server and suddenly I had a Netflix alternative running on my own hardware. Jellyfin is also supported on my smart TV so, now I could stream all the media I wanted to my television without any hassle. Dockerizing it made deployment clean and simple. No more configuration bloat, just a container with everything it needed. 

## Adding a Discord bot

I added a Discord bot to the mix, a Python application that tracks server stats, notifies players about free games, and runs silly slot machine commands. Dockerizing it alongside Jellyfin meant my server was now a polyglot ecosystem: Java for Minecraft, Python for Discord, SQLite for data.

## The learning continues

Looking back at my journey, I've learned so much: SSH authentication, firewall configuration, Docker containerization and countless Linux system administration tasks. Each challenge felt impossible until I solved it, then obvious in retrospect.

My homeserver isn't just a Minecraft server anymore, it's a full platform hosting multiple services, managing network traffic, and teaching me about infrastructure, one deployment at a time.

If you're thinking about building your own homeserver, my advice is simple: start small, embrace the challenges, and don't be afraid to experiment. The learning is half the fun.

---

*Currently running: Ubuntu Server 24.04 LTS, Minecraft Paper 1.21.11, Jellyfin media server, Discord bot and planning a comprehensive stats tracking web app built with Next.js and possibly the hosting of this very website.*