// app/algorithms/index.tsx
import React from 'react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function intro() {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Single Source Shortest Path</h1>
        <p className="text-center text-gray-600">Algorithms to find the shortest between two nodes.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700">
        Given a directed graph <Latex>$G = (V,E)$</Latex>, with non-negative costs on each edge, and a selected source node v in V, for all w in V, find the cost of the least cost path from v to w.

        The cost of a path is simply the sum of the costs on the edges traversed by the path.

        This problem is a general case of the more common subproblem, in which we seek the least cost path from v to a particular w in V. In the general case, this subproblem is no easier to solve than the SSSP problem.        </p>
      </section>

      <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Dijkstra's Algorithms</h2>
      <p className="text-gray-700">

      Suppose we are given a weighted directed graph  <Latex> $G = (V, E, w)$ </Latex> with two special
      vertices, and we want to find the shortest path from a source vertex <Latex> $s$ </Latex> to a target
      vertex  <Latex> $t$ </Latex>. That is, we want to find the directed path P starting at s and ending
      at t that minimizes the function:
      <Latex> {'$$w(P) := \\displaystyle \\sum_{u \\rightarrow v \\in P} w(u \\rightarrow v) $$'} </Latex>
      <br />
      Dijkstra's algorithm is a greedy algorithm for the SSSP problem.

      A "greedy" algorithm always makes the locally optimal choice under the assumption that this will lead to an optimal solution overall.
      Example: in making change using the fewest number of coins, always start with the largest coin possible.
      Data structures used by Dijkstra's algorithm include:

      a cost matrix C, where C[i,j] is the weight on the edge connecting node i to node j. If there is no such edge, <Latex>$C[i,j] = \infty$ </Latex>
      a set of nodes S, containing all the nodes whose shortest path from the source node is known. Initially, S contains only the source node.
      a distance vector D, where D[i] contains the cost of the shortest path (so far) from the source node to node i, using only those nodes in S as intermediaries.
</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Complexity</h2>
        <p className="text-gray-700">
          Here, we discuss the time and space complexity of the algorithm, providing insights into its efficiency.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <p className="text-gray-700 mb-4">
          Below are some resources to help you understand the algorithm better.
        </p>
        <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Aa2sqUhIn-E"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}