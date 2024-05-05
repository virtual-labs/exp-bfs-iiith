### Time and Space complexity of BFS
<iframe src="https://www.youtube.com/embed/Jf2vNh9fNVc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Time complexity of BFS

   - In computer science, the [Time complexity](https://en.wikipedia.org/wiki/Time_complexity) is the computational complexity that describes the amount of time it takes to run an algorithm.
   - Since in the worst case breadth-first search has to consider all paths to all possible nodes the time complexity of breadth-first search is O(|E| + |V|) where |V| and |E| is the cardinality of set of vertices and edges respectively.
   - The complexity is this since every vertex and every edge will be explored in the worst case.

### Space complexity of BFS

   - [Space complexity](https://courses.cs.northwestern.edu/311/html/space-complexity.html) is a measure of the amount of working storage an algorithm needs. That means how much memory, in the worst case, is needed at any point in the algorithm.
   - Since all of the nodes of a level must be saved until their child nodes in the next level have been generated, the space complexity is proportional to the number of nodes at the deepest level.
   - The space complexity can also be expressed as O(|V|) where |V| is the cardinality of the set of vertices.
   - In the worst case scenario, the graph has a depth of 1 and all vertices must be stored.



