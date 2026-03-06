FirstIOSKMP - SwiftUI + Kotlin Multiplatform + Gradle Sample

Project structure:

shared/
  Kotlin Multiplatform module built with Gradle

iosApp/
  SwiftUI iOS app consuming the shared module

How to use:

1. Open shared module in Android Studio (Gradle project).
2. Build the shared module to generate iOS framework.
3. Open iosApp in Xcode.
4. Import the generated shared framework.
5. Run the SwiftUI app.

Shared Kotlin class:
PostRepository.kt

SwiftUI UI:
ContentView.swift