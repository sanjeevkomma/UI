import SwiftUI
import shared

struct ContentView: View {

    let repo = PostRepository()

    var body: some View {
        Text(repo.hello())
            .padding()
    }
}