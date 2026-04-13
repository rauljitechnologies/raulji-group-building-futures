-- Allow authenticated users (admins) full access to blog_posts
CREATE POLICY "Authenticated users can insert blog posts"
ON public.blog_posts FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
ON public.blog_posts FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
ON public.blog_posts FOR DELETE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can view all blog posts"
ON public.blog_posts FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users full access to team_members
CREATE POLICY "Authenticated users can manage team members"
ON public.team_members FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
